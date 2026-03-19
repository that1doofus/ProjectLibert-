function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function checkPassword(password) {
  if (password === "letusbefree") {
    return { success: true, url: "https://docs.google.com/forms/d/e/1FAIpQLScGPQZj48KzHZiX9LlBc7TVniGiaXvUEIx5hYamQl4BhH3mqg/viewform?usp=publish-editor" }; 
  } else {
    return { success: false };
  }
}
