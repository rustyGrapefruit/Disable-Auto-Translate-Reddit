# Disable Auto Translate Reddit

This extension disables all automatic translations on Reddit for Firefox.

## Features

- Disables automatic translations on Reddit.
- That's it!

This extension disables reddit's automatic translation feature simply by removing the query parameter `?tl=xx` (xx stands for the language code) from the URL. This is done by listening for the `onBeforeRequest` event and modifying the URL before the request is sent.

## Installation

1. Download the latest release from the [releases page]() and save the xpi file to your computer.
2. Open Firefox and navigate to `about:addons`.
3. Click on the gear icon in the top right corner and select `Install Add-on From File...`.
4. Select the xpi file you downloaded in step 1.
5. Click `Add` to install the extension.
6. Done!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
