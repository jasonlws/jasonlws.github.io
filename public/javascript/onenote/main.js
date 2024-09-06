$(document).ready(
    
    function () { 

$("#runsteps").click(function (d) {
    // Function to format C# code
    function formatCSharpCode(code) {
      // Create a pre element
      const preElement = document.createElement('pre');
      
      // Create a code element with the language-csharp class
      const codeElement = document.createElement('code');
      codeElement.className = 'language-csharp';
      
      // Set the text content of the code element
      codeElement.textContent = code;
      
      // Append the code element to the pre element
      preElement.appendChild(codeElement);
      
      // Apply Prism highlighting
      Prism.highlightElement(codeElement);
      
      return preElement;
    }
  
    var csharpCode = $("#content").val();

    // Example usage
//     const csharpCode = `
// using System;

// public class Program
// {
// public static void Main()
// {
// // This is a comment
// string message = "Hello, World!";
// Console.WriteLine(message);

// int number = 42;
// Console.WriteLine($"The answer is {number}");
// }
// }
//     `;
  
    // Get the container where you want to display the formatted code
    const container = document.getElementById('code-container');
    
    // Format and append the code
    container.appendChild(formatCSharpCode(csharpCode));
  });

}
);
