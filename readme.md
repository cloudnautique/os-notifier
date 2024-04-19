# OS-Notifier

OS-Notifier is a tool designed to send notifications to the user's operating system. It allows for a customizable message and title to be specified, making it versatile for various notification needs.

## Features

- **Customizable Message**: Specify the message you want to send to the user.
- **Customizable Title**: Set a title for the notification, giving context to the message.

## Usage

To use OS-Notifier, you need to provide two arguments:

- `message`: The message you want to send to the user.
- `title`: The title of the message.

The tool utilizes `sys.exec` to execute a Node.js script (`notifier.js`) located in the `${GPTSCRIPT_TOOL_DIR}` directory, which handles the notification sending process.

## Example

To send a notification with the title "Reminder" and the message "Meeting at 3 PM", you would use the following syntax:

```
gptscript eval --tools "github.com/cloudnautique/os-notifier" "Send a message from the terminal that says HELLO!"
```
