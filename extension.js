const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('"SAD" is now active!');
	
	let dispB = vscode.commands.registerCommand("SAD.sad", function() {
		vscode.debug.stopDebugging();
		vscode.window.showInformationMessage('All running debuggers stopped');
		})
	context.subscriptions.push(dispB);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
