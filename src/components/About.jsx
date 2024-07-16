import React from 'react';
// import Button from './Button';
// In JS, we set CSS properties like style.property = value

export default function About(props) {

return (
<>
<div className="container" style={props.myStyle}>
<h1 className='my-3'>About Me</h1>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.myStyle}>
      Comprehensive Text Analysis
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={props.myStyle}>
        <strong>Comprehensive Text Analysis : </strong>Our text utility website offers an extensive range of tools for analyzing textual content. Whether you're a student needing to check the readability of an essay or a professional looking to optimize a marketing copy, our platform provides detailed insights into your text. With features like word and character count, readability scores, keyword density analysis, and sentiment analysis, you can ensure your content is both effective and engaging.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.myStyle} >
      Powerful Text Modification Tools
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={props.myStyle}>
        <strong>Powerful Text Modification Tools : </strong>In addition to analysis, our website excels in text modification capabilities. Users can reformat text, convert case (e.g., upper, lower, title case), remove duplicate lines, and even generate Lorem Ipsum placeholder text for design projects. These tools are designed to streamline your workflow, making it easy to enhance and customize your text with just a few clicks.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.myStyle}>
      User-Friendly Interface and Seamless Experience
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={props.myStyle}>
        <strong>User-Friendly Interface and Seamless Experience : </strong> Our text utility website is built with a user-friendly interface that ensures a seamless experience for all users. The intuitive design allows for easy navigation and quick access to all tools and features. Whether you're on a desktop or a mobile device, our responsive design adapts to your screen size, providing a consistent and efficient user experience.
      </div>
    </div>
  </div>
</div>
{/* <div className="">
 <Button toggler = {toggleDarkMode}/>
</div> */}
</div>
</>
);
}
