# Prompt 1

You're a Senior Frontend Developer. Using the previous image as a reference, create a stopWatch app with the functionalities described below:

1. The initial value will be 00:00:00, and it will have two buttons Start and Clear as shown in the reference image.
2. When pressing the Start button, the clock will start running, and the Start button now changes to Pause.
3. Once the clock starts, the user can pause it by pressing the Pause button. If it gets pressed the button will change to Continue and will have light blue colour.
3. If the Continue button gets pressed,  the clock will keep running from its previous value and will change its text to Pause and will be shown in green colour once again.
4. If the Clear button gets pressed, the clock will restart to its initial value.

Use tailwind library for page styles.

Ask me if you have any doubt with the prompt whatever if there is missing information or because it isn't clear.

# ChatGPT

Got it! I understand the requirements, and here's how I would build the stopwatch app using Tailwind CSS for styling. Below is the code broken down into HTML, Tailwind CSS, and JavaScript.

### HTML (Structure)
We will use Tailwind classes to style the buttons and the display based on the reference image.

### Tailwind CSS (Already included in the HTML)
The styling is done using Tailwind CSS classes directly in the HTML file, making the stopwatch layout responsive and easy to modify.

####
- **Display:** The clock display is styled with a light blue background (bg-blue-100), black text, and a rounded border to match the reference image.
- **Buttons:** The Start and Clear buttons are styled with Tailwind classes for colors, sizes, and hover effects.

### JavaScript (Functionality)
This part handles the stopwatch logic. It starts, pauses, continues, and clears the timer as per your requirements.

### Key Features:
####
1. **Initial Value:** The stopwatch initially displays 00:00:00 (hours, minutes, seconds).
2. **Start/Pause Button:**
- When clicked, the button text changes to "Pause" and the stopwatch starts.
- If paused, the button changes to "Continue" with a light blue color (bg-blue-400).
3. **Continue Functionality:** Clicking "Continue" resumes the stopwatch from where it left off.
4. **Clear Button:** Clicking "Clear" resets the stopwatch to 00:00:00 and changes the button text back to "Start."

### Styling with Tailwind CSS:
- The **Start/Pause** button switches between green (Start/Pause state) and blue (Continue state).
- The **Clear button** remains red, resetting the timer as specified.
- The layout is responsive and centered on the page.

This should give you the stopwatch app you're aiming for. Let me know if any details need to be adjusted or clarified!