# Embedding the Chat Client

This guide explains how to embed the Agentforce Chat Client on your website.

## Quick Start

Add the following code to your website where you want the chat client to appear:

```html
<iframe 
  src="YOUR_DEPLOYED_URL/index.html" 
  style="position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; border: none; z-index: 999999;"
  allow="microphone"
></iframe>
```

Replace `YOUR_DEPLOYED_URL` with the URL where you deployed the chat client.

## Configuration Options

### Positioning
You can adjust the position by modifying the `style` attribute:
```html
style="position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px;"
```

### Size
Adjust the `width` and `height` values to change the size of the chat window:
```html
width: 400px; height: 600px;
```

### Z-Index
The default z-index is 999999. You can adjust this if needed:
```html
z-index: 999999;
```

## Security Considerations

1. Always use HTTPS for the deployed chat client URL
2. Consider implementing Content Security Policy (CSP) headers:
```html
<meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self' https://your-domain.com">
```

3. The chat client requires microphone access for voice input features. The `allow="microphone"` attribute is necessary.

## Example Implementation

Here's a complete example of how to embed the chat client:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your Website</title>
    <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self' https://your-domain.com">
</head>
<body>
    <!-- Your website content -->
    
    <!-- Chat Client -->
    <iframe 
        src="https://your-deployed-chat-client.com/index.html" 
        style="position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; border: none; z-index: 999999;"
        allow="microphone"
    ></iframe>
</body>
</html>
```

## Troubleshooting

1. If the chat client doesn't appear:
   - Check if the URL is correct
   - Verify that the iframe is not being blocked by CSP headers
   - Ensure the z-index is high enough to appear above other elements

2. If microphone access isn't working:
   - Verify the `allow="microphone"` attribute is present
   - Check if the browser supports the feature
   - Ensure the user has granted microphone permissions

3. If the chat client appears but doesn't function:
   - Check the browser console for errors
   - Verify that all required resources are loading
   - Ensure the deployment URL is accessible 