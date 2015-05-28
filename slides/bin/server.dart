import 'dart:io';
import 'dart:async' show runZoned;
import 'package:http_server/http_server.dart' show VirtualDirectory;

void main() {
  var port = int.parse(_getConfig("PORT", "8080"));
  var web = _getConfig("WEB_FOLDER", '../build/web');

  // Assumes the server lives in bin/ and that `pub build` ran.
  var buildUri = Platform.script.resolve(web);

  var staticFiles = new VirtualDirectory(buildUri.toFilePath());
  staticFiles
    ..allowDirectoryListing = true
    ..directoryHandler = (dir, request) {
    var indexUri = new Uri.file(dir.path).resolve('index.html');
    var uri = indexUri.toFilePath();
    staticFiles.serveFile(new File(uri), request);
  };

  runZoned(() {
    HttpServer.bind(InternetAddress.ANY_IP_V4, port).then((server) {
      server.listen(staticFiles.serveRequest);
    });
  }, onError: (e, stackTrace) => print('Error: $e $stackTrace'));
}

_getConfig(String name, [defaultValue]) {
  var value = Platform.environment[name];
  if (value == null) {
    return defaultValue;
  }
  return value;
}
