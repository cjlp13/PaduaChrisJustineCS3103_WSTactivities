const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordcount');
const sentenceCount = document.getElementById('sentenceCount');

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();

    const words = text.split(/\s+/).filter(word => word !== '');
    const sentences = text.split(/[.!?]/).filter(sentence => sentence !== '');
    
    wordCount.textContent = `Words: ${words.length}`;
    sentenceCount.textContent = `Sentences: ${sentences.length}`;
});