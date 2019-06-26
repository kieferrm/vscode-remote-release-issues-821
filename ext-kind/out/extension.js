"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('ext-kind.helloWorld', () => {
        vscode.window.showInformationMessage(`My remote name ${vscode.env.remoteName}`);
        const ext = vscode.extensions.getExtension('kieferrm.ext-kind');
        if (ext) {
            vscode.window.showInformationMessage(`My extension kind ${ext.extensionKind === vscode.ExtensionKind.UI ? 'UI' : 'Workspace'}`);
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map