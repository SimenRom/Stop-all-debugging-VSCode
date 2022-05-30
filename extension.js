const vscode = require('vscode');
//const {window, StatusBarAlignment} from 'vscode';
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let dispB = vscode.commands.registerCommand("SAD.sad", function() {
        vscode.debug.stopDebugging();
		vscode.window.showInformationMessage('All running debuggers stopped');
        buttonInstance.hide();
    })
	context.subscriptions.push(dispB);
    
    
    let buttonInstance = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
    buttonInstance.text = `$(debug-stop) Stop all debugging`;
    buttonInstance.command = "SAD.sad";
    buttonInstance.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
    context.subscriptions.push(buttonInstance);
    
    vscode.tasks.onDidStartTask(()=>{
        if(vscode.workspace.getConfiguration('SAD').get("showButtonOnTaskEvent")) {
            buttonInstance.show();
        }
    });
    vscode.debug.onDidStartDebugSession(()=>{
        buttonInstance.show();
    });
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}