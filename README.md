# Quizzy Rascal

## Author
Emma Lawlor

## Project Overview
Quizzy Rascal is an interactive music trivia quiz. Desgined to provide entertainment to the user, the quiz asks 10 random music questions.The quiz is presented in a multiple choice format, displaying the correct/incorrect answers on submission and keeping track of user's score at the bottom of the window. 

The name was chosen as a play on the stage name of English rapper Dizzee Rascal, helping to set a fun and lighthearted tone. 

## Deployed Site
https://emmalawlor.github.io/quizzy-rascal/

## Table of Contents

## UX

### Project Goals
#### As the Site Owner I Want to:
- Present a fun, interactive music quiz to the user.
- Provide the user with instructions/rules for playing the quiz.
- Give feedback to user when answer is selected, displaying both correct and incorrect options. 
- Display user's current score throughout the running of the quiz.

#### As the Site User I Want to:
- Play a fun and easy to use quiz to test music knowledge.
- Progress easily and intuitively through the quiz, with the option of returning to the homescreen at any point.
- Be informed whether chosen answer was correct or incorrect when selected.
- Be aware of current score while progressing through the quiz. 

### Design Choices

- Typography

- Images

    - [Background Image](https://github.com/EmmaLawlor/quizzy-rascal/blob/main/assets/images/music-notes.jpg0) of black and white music notes chosen as it is in keeping with the musical theme of the quiz. The same image was used across all page of the site to maintain a sense of familiarity and to keep the overall layout simple and content-focused. 

![Background Image](documentation/background-image.jpg)

- Colors 

    - Vibrant yellow(#ffff00) ![image](https://user-images.githubusercontent.com/84344402/130504915-71b37849-2d01-4426-a4c3-139674287dd8.png)
 and blue(#0000ff) ![image](https://user-images.githubusercontent.com/84344402/130504866-b10213ee-d192-4533-9b86-4f971e7a2b66.png)
 colors were chosen for the site to maintain the fun feel of the site. 
    - As seen in the wireframes, the Quizzy Rascal heading and sub-heading were originally intended to be blue. 
    - The [WebAIM](https://webaim.org/resources/contrastchecker/) site was used to check the contrast of both colours against a background of black, the predominant color of the background image. 
    - The blue(#0000ff) color failed the contrast check in terms of accessibility.
    ![image](https://user-images.githubusercontent.com/84344402/130504388-2ec94089-bc58-4f62-a871-5057cdae7aee.png)

    - The yellow(#ffff00) color passed the contrast check, and so the heading and sub-heading were changed to this font color to improve visual accessibility. 
    ![image](https://user-images.githubusercontent.com/84344402/130504563-107f846c-a319-4b21-8dc6-8471b95199d4.png)
    
    - Color codes were take from [htmlcolorcodes.com](https://htmlcolorcodes.com/)

- Transitions/Animations

### Wireframes
- The wireframes for this project were created using (Balsamiq)[https://balsamiq.com/]
- The Home, Quiz and Results pages were drawn up in mobile, desktop and tablet views. 
- The wireframes helped to map out the basic structure of the site while building the project, however some style and layout changes were made throughout the development process. 
    - Desktop View: Home, Quiz and Result Pages
    
    ![image](https://user-images.githubusercontent.com/84344402/129425119-0f04b530-abef-4505-88c6-e29fe6add371.png)


    - Mobile View: Home, Quiz and Result Pages
    
    ![image](https://user-images.githubusercontent.com/84344402/129425193-ececaa72-b0bb-4846-bb64-5050ee13e758.png)


    - Tablet View: Home, Quiz and Result Pages
    
    ![image](https://user-images.githubusercontent.com/84344402/129425052-77deec35-7028-47dd-aa99-06aa311d25ad.png)


### Implemented Features

### Future Features to Implement

## Testing

### Validation Testing

#### HTML
All html pages of this site were validated using [W3C validator](https://validator.w3.org/)

- The Home page (index.html) returned the following errors
![image](https://user-images.githubusercontent.com/84344402/130333967-e79f0f37-aff4-4638-80aa-0d8a7ee80113.png)
    - This was rectified by removing the button element from both of the links in question, as seen here:
    ![image](https://user-images.githubusercontent.com/84344402/130334266-e42f0e50-e9d4-466a-8d0e-cd3ae2f639a1.png)

    - The links were then styled to resemble buttons using CSS, as shown here:

    ![image](https://user-images.githubusercontent.com/84344402/130334276-4fd86152-43e8-44f0-b971-050c5d2f6a63.png)

    - After making these adjustments, the Home page passed through the validator without and errors or warnings.
    ![image](https://user-images.githubusercontent.com/84344402/130334309-0a850d53-f0e3-4ad6-95ab-f4f3455363e0.png)

- The quiz page passed through the validator with no errors or warnings.
![image](https://user-images.githubusercontent.com/84344402/130334484-4dc4555c-f76c-4c49-be97-905fcfbc3769.png)

- The result page retured the following error:
![image](https://user-images.githubusercontent.com/84344402/130334510-f39a9f75-7760-4135-8dab-f69a6fb746f1.png)
    - As above, on the home page, this was corrected by removing the button element from the play link.
    ![image](https://user-images.githubusercontent.com/84344402/130334541-dbd9c6fe-5c0b-4e1c-a34d-48a0d8a30ea1.png)
    
    - The link was then styled to resemle a button, in keeping with the rest of the site:
    
    ![image](https://user-images.githubusercontent.com/84344402/130334614-98ce6f6c-6f9f-48e1-811b-912f8f41b635.png)

    - The quiz page then passed through the validator with no further errors or warnings:
    ![image](https://user-images.githubusercontent.com/84344402/130334635-cefffa2d-7978-4ae1-8a22-b0ef0e44903c.png)

#### CSS
- The CSS file for this was validated using the [W3C Validator](https://jigsaw.w3.org/css-validator/)
- When passed through the validator, the CSS file returned no errors or warnings

![image](https://user-images.githubusercontent.com/84344402/130334711-16930143-fae7-4575-961b-9a7578e95f5d.png)

#### JavaScript
All JavaScript files for this site were validated using [JSHint](https://jshint.com/)


### Manual Testing

### Cross Browser Testing

### Defects

#### Defects of Note
- Any defects which occurred during development were tracked using the GitHub Issues section of this repository, which can be found [here](https://github.com/EmmaLawlor/quizzy-rascal/issues).
- Details of each bug were noted as they were discovered, with screenshots taken to demonstrate the problem where possible. 
- The GitHub Issues section allowed for close out of defects as they were rectified, again using screenshots to show the solution when possible. 

#### Outstanding Defects

### Spelling and Grammar

## Accessibility

### Keyboard Navigation

### Screen Reader

## Deployment

The site was deployed from its [GitHub Repository](https://github.com/EmmaLawlor/quizzy-rascal) to GitHub Pages using the following steps: 

1. From the Quizzy Rascal repository, select the Settings tab.
![image](https://user-images.githubusercontent.com/84344402/129406799-46c24512-e424-48e3-89b3-5b9a2e3a85c7.png)

2. Select the Pages sub-menu on the left of the page.

![image](https://user-images.githubusercontent.com/84344402/129406863-5eac3c50-1ab5-4b2a-a2eb-a2b4c2f1c53f.png)

3. Under Source, select the main branch and hit save.
![image](https://user-images.githubusercontent.com/84344402/129406956-65bd0e3f-ac1b-45f6-a735-1f6878483654.png)

![image](https://user-images.githubusercontent.com/84344402/129406984-6886c55d-9ea1-4169-a6c1-f590178c32d7.png)

4. Upon saving, the page refreshes to confirm deployment of site and provides link to [live site](https://emmalawlor.github.io/quizzy-rascal/)
![image](https://user-images.githubusercontent.com/84344402/129407005-9dad2c38-1f07-46ab-a85b-ccb9e86856fb.png)

## Credits

### Media
- [Background Image](https://github.com/EmmaLawlor/quizzy-rascal/blob/main/assets/images/music-notes.jpg) of black and white music notes, used on all pages taken from [pxhere.com](https://pxhere.com/en/photo/1043482)

- Background music is track "Online Deal", taken from [playonloop](https://www.playonloop.com/freebies-download/)

- House icon for home page link and audio control icons used in quiz pager header all taken from [Font Awesome](https://fontawesome.com/)

![image](https://user-images.githubusercontent.com/84344402/129630296-236f52a2-fb62-406d-97cc-a0bb512b869b.png)
![image](https://user-images.githubusercontent.com/84344402/129630340-74afbddd-315a-4142-84c6-e2cc6f83da98.png)
![image](https://user-images.githubusercontent.com/84344402/129630453-651ab19a-b470-45f5-9007-ee11a1b217b3.png)


### Content
- Trivia content for quiz questions take from [Radio Times](https://www.radiotimes.com/quizzes/pub-quiz-music-round/) and [Thought Catalog](https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/)

### Acknowledgements
- Favicon created using (favicon.io)[https://favicon.io/favicon-converter/]
- Nova Round font imported from (Google Fonts)[https://fonts.google.com/specimen/Nova+Round?query=round#glyphs]
- Help sought from W3Schools in creating modal to contain quiz rules. Code adapted and modified from (here)[https://www.w3schools.com/howto/howto_css_modals.asp] 
- Help in applying click transform effect to buttons from [Geeks for Geeks](https://www.geeksforgeeks.org/how-to-add-a-pressed-effect-on-button-click-in-css/)
- Code for incrementing user score was adapted from the Code Institute Love Maths walkthrough project
- Help in centering the modal on the screen was sought from [Stack Overflow](https://stackoverflow.com/questions/39627549/how-to-center-modal-to-the-center-of-screen/39636961)
- Help in fixing size of background image from [css-tricks.com](https://css-tricks.com/perfect-full-page-background-image/)

### Thank You
- Thanks to Code Institute cohort facilitator Kasia for providing advice and learning resources as well as a listening ear, whenever needed. 
- Thank you to my peers on Code Institue's slack channel for their feedback on this project when submitted for peer code review. 
- A huge thank you to my mentor Malia Havlicek for her wisdom, advice and invaluable experience when providing support throughout project development. 
