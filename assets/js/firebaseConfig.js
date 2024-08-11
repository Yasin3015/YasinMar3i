// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz2Oq_FRmsE5gXkH3UcVP3eGlw_3xKc5Q",
  authDomain: "my-portfolio-ee9b6.firebaseapp.com",
  projectId: "my-portfolio-ee9b6",
  storageBucket: "my-portfolio-ee9b6.appspot.com",
  messagingSenderId: "790626333249",
  appId: "1:790626333249:web:0989f67b95351e2393ccc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  clearErrors();

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let hasError = false;

        if (!name) {
            showError('nameError', 'Name is required.');
            hasError = true;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email) {
            showError('emailError', 'Email is required.');
            hasError = true;
        } else if (!emailPattern.test(email)) {
            showError('emailError', 'Please enter a valid email address.');
            hasError = true;
        }

        if (!message) {
            showError('messageError', 'Message is required.');
            hasError = true;
        }

        // If there are errors, do not proceed
        if (hasError) {
            return;
        }

        // Prepare data to send to Firestore
        const formData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString()  // Optional: for tracking the submission time
        };

  try {
    const docRef = await addDoc(collection(dataBase, "contacts"), formData);
    alert('Form data submitted successfully. Document ID: ' + docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
    alert('Failed to submit form data.');
  }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// Function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(element) {
        element.textContent = '';
    });
}
