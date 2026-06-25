/* =====================================
   MODULE INFORMATION DATABASE
===================================== */

const moduleData = {

    mod1: {
        title: "🎙️ Module 1: Courtroom Speech-to-Text Input",
        content: `
        <p>
        Converts courtroom discussions, client consultations,
        and legal audio recordings into structured transcripts.
        </p>

        <br>

        <h3>Technology Used</h3>

        <ul>
            <li>OpenAI Whisper</li>
            <li>Speech Recognition</li>
            <li>Translation Layer</li>
            <li>Transcript Normalization</li>
        </ul>

        <br>

        <h3>Output</h3>

        <p>
        Structured courtroom transcript ready for legal analysis.
        </p>
        `
    },

    mod2: {
        title: "📄 Module 2: Legal Document Parser",
        content: `
        <p>
        Extracts legal facts from FIRs, Chargesheets,
        Court Notices and PDF documents.
        </p>

        <br>

        <h3>Technology Used</h3>

        <ul>
            <li>OCR Processing</li>
            <li>PDF Parsing</li>
            <li>Text Extraction</li>
            <li>Fact Structuring</li>
        </ul>

        <br>

        <h3>Output</h3>

        <p>
        Structured JSON representation of legal facts.
        </p>
        `
    },

    mod3: {
        title: "📚 Module 3: Legal Knowledge Base (RAG)",
        content: `
        <p>
        Maintains legal statutes, precedents,
        BNS provisions and BNSS references.
        </p>

        <br>

        <h3>Technology Used</h3>

        <ul>
            <li>ChromaDB</li>
            <li>Vector Database</li>
            <li>Embeddings</li>
            <li>Retrieval Augmented Generation</li>
        </ul>

        <br>

        <h3>Output</h3>

        <p>
        Context-aware legal references for reasoning.
        </p>
        `
    },

    mod4: {
        title: "🔍 Module 4: Loophole Detection Engine",
        content: `
        <p>
        Analyzes extracted facts and legal references
        to identify procedural defects and contradictions.
        </p>

        <br>

        <h3>Technology Used</h3>

        <ul>
            <li>Gemma 2</li>
            <li>Ollama</li>
            <li>Prompt Engineering</li>
            <li>Rule-based Analysis</li>
        </ul>

        <br>

        <h3>Output</h3>

        <p>
        Detected legal loopholes and defense opportunities.
        </p>
        `
    },

    mod5: {
        title: "✍️ Module 5: Draft Generator",
        content: `
        <p>
        Generates professional court-ready legal drafts
        using all previous module outputs.
        </p>

        <br>

        <h3>Technology Used</h3>

        <ul>
            <li>LLM Assisted Drafting</li>
            <li>Template Engine</li>
            <li>Legal Formatting</li>
            <li>Automated Documentation</li>
        </ul>

        <br>

        <h3>Output</h3>

        <p>
        Bail applications, legal arguments,
        and structured court documents.
        </p>
        `
    }

};

/* =====================================
   MODAL SYSTEM
===================================== */

function openModal(moduleId) {

    const modal = document.getElementById("moduleModal");

    const title = document.getElementById("modalTitle");

    const body = document.getElementById("modalBody");

    title.innerHTML = moduleData[moduleId].title;

    body.innerHTML = moduleData[moduleId].content;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function closeModal() {

    document.getElementById("moduleModal").style.display = "none";

    document.body.style.overflow = "auto";
}

/* =====================================
   CLOSE MODAL OUTSIDE CLICK
===================================== */

window.addEventListener("click", function(event){

    const modal = document.getElementById("moduleModal");

    if(event.target === modal){

        closeModal();

    }

});

/* =====================================
   ESC KEY SUPPORT
===================================== */

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        closeModal();

    }

});

/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const revealElements = document.querySelectorAll(
    ".feature-card, .problem-card, .impact-card, .tech-card, .future-card, .module-card, .demo-step, .timeline-item"
);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(element=>{

element.style.opacity = "0";

element.style.transform = "translateY(40px)";

element.style.transition =
"all 0.8s ease";

observer.observe(element);

});

/* =====================================
   DEMO IMAGE CLICK ENLARGEMENT
===================================== */

const demoImages = document.querySelectorAll(".demo-step img");

demoImages.forEach(image=>{

image.addEventListener("click", ()=>{

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,0.9)";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "99999";

const enlargedImage = document.createElement("img");

enlargedImage.src = image.src;

enlargedImage.style.maxWidth = "90%";
enlargedImage.style.maxHeight = "90%";
enlargedImage.style.borderRadius = "20px";

overlay.appendChild(enlargedImage);

document.body.appendChild(overlay);

overlay.addEventListener("click", ()=>{

overlay.remove();

});

});

});

/* =====================================
   NAVBAR BACKGROUND ON SCROLL
===================================== */

window.addEventListener("scroll", ()=>{

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background =
"rgba(11,15,25,0.95)";

}else{

navbar.style.background =
"rgba(11,15,25,0.85)";

}

});

/* =====================================
   COMING SOON BUTTON
===================================== */

const comingSoonBtn =
document.querySelector(".coming-soon-btn");

if(comingSoonBtn){

comingSoonBtn.addEventListener("click", ()=>{

alert(
"Architecture Diagram will be added in a future update."
);

});

}

/* =====================================
   PAGE LOADED
===================================== */

window.addEventListener("load", ()=>{

console.log(
"AI Powered Legal Research and Drafting Assistant Loaded Successfully"
);

});
/* BACK TO TOP */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

backToTop.style.display = "block";

}else{

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});