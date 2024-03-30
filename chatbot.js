// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Define response arrays
const greetings = ["Hello!", "Hi there!", "How can I help you today?"];
const depression_resources=["I'm here for you, and I care about what you're going through.",
"You don't have to go through this alone. I'm here to listen.",
"It's okay to feel the way you do. Your feelings are valid.",
"I can't completely understand what you're feeling, but I want to try to help.",
"Let's take things one step at a time. What can I do to support you today?",
"I'm willing to just sit with you and keep you company if that's what you need.",
"Is there anything specific that's been on your mind lately that you'd like to talk about?",
"I'm proud of you for opening up about how you're feeling.",
"Remember, there is hope, and things can get better.",
"I believe in your strength, even when you might doubt it."]

const depression_solution=["It's okay to ask for professional help. It's a sign of strength, not weakness.",
"Therapy: Cognitive-behavioral therapy (CBT) and interpersonal therapy are effective for treating depression. Regular sessions with a therapist can help you address negative thought patterns and improve your emotional well-being","Medication: Antidepressant medications prescribed by a psychiatrist may be necessary in some cases.","Lifestyle Changes: Prioritize self-care, get regular exercise, maintain a healthy diet, and ensure you get enough sleep.","Social Support: Engage with friends and family who provide emotional support and reduce isolation.","Mindfulness and Relaxation Techniques: Learn to manage stress and negative thoughts through mindfulness and relaxation practices."]

const anxiety_resources=["I'm here for you, and I understand that anxiety can be challenging. You're not alone in this.",
"It's okay to feel anxious; it's a natural response to stress. You're doing your best, and that's what matters.",
"Take a deep breath. I'm here with you, and we can face this together.",
"Is there something specific that's triggering your anxiety right now that you'd like to talk about?",,
"Don't be too hard on yourself. Anxiety is a challenge, but it doesn't define you.",
"Remember to practice self-care. What helps you relax and find peace?",
"It's okay to seek professional help if you feel overwhelmed. There are effective treatments available."]

const anxiety_solution=["Cognitive-Behavioral Therapy (CBT)**: CBT is highly effective for anxiety disorders. It helps individuals identify and manage anxiety triggers and develop coping strategies.",
"Medication: Anti-anxiety medications may be prescribed by a psychiatrist.",
"Breathing and Relaxation Exercises: Techniques like deep breathing, progressive muscle relaxation, and mindfulness can help reduce anxiety symptoms.",
"Lifestyle Changes: Prioritize healthy habits such as regular exercise, a balanced diet, and adequate sleep.",
"Avoidance Exposure: Gradual exposure to anxiety-provoking situations can help desensitize you to your fears."]

const schizophrenia_resources=["I'm here for you, and I'm not going anywhere. We'll navigate this together.",
"I understand that what you're experiencing can be frightening, but I believe in your strength and resilience.",
"Your feelings are valid, and I'm here to listen whenever you want to talk.",
"Let's work together to find coping strategies that can help you manage your symptoms.",
"It's okay to take things one step at a time. What's something small we can accomplish today?",
"I'm proud of you for seeking treatment and taking care of your mental health.",
"You are not defined by your diagnosis; you're a unique and valuable person.",
"If you ever feel overwhelmed or need help, please don't hesitate to reach out to your mental health professionals.",
"Remember that self-care is essential. What activities or routines help you feel more at ease?",
"Medication: Antipsychotic medications are the primary treatment for schizophrenia. It's essential to take medication as prescribed by a psychiatrist.",
"Therapy: Cognitive-behavioral therapy for psychosis (CBTp) and family therapy can be beneficial as adjuncts to medication.",
"Community Support: Many individuals with schizophrenia benefit from community-based programs and support services.",
"Stress Management: Learning stress-reduction techniques can help manage symptoms.",
"Education and Advocacy: Understand the condition and advocate for your needs within the healthcare system."]

const eatingdisorder_resources=["You are not defined by your eating disorder; you are a valuable and loved person.",
"Therapy: Treatment options include cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), and family-based therapy. Seek the help of a therapist who specializes in eating disorders.",
"Nutritional Counseling: Work with a registered dietitian to establish a healthy eating plan.",
"Medical Monitoring: Regular medical check-ups are crucial for addressing physical complications associated with eating disorders.",
"Support Groups: Join support groups or attend group therapy to connect with others who are on a similar journey.",
"Self-Compassion and Body Positivity: Focus on self-acceptance and positive body image.",
"I'm proud of you for taking steps to address your eating disorder. You're brave."]

const addictivebehaviour_resources=[" Professional Treatment: Seek addiction treatment from a qualified therapist, counselor, or addiction specialist.",
"Support Groups: Attend support groups like Alcoholics Anonymous (AA) or Narcotics Anonymous (NA) to connect with people who understand your struggles.",
"Medication-Assisted Treatment (MAT): In some cases, medication may be prescribed to assist in overcoming addiction.",
"Avoid Triggers: Identify and avoid situations, people, or environments that trigger addictive behavior.",
"Coping Strategies: Learn healthy coping strategies to replace addictive behaviors.",
"Let's explore treatment options together. You don't have to face this on your own.",
"It's okay to have difficult moments, but I believe in your strength to overcome this.",
"You are not defined by your addiction; you are a valuable and loved person.",
"Recovery is a journey, and I'll be here every step of the way.",
"I'm proud of you for taking steps to address your addiction. You're brave."]

const body_dysmorphia_resources = ["I'm here for you, and I care about how you're feeling.", "You are not alone in this. I'm here to listen and support you.", "Your feelings are valid, and I believe you.", "It's okay to have difficult days. We all do, and I'm here to help you through them.","You are so much more than your appearance. Your qualities and strengths are what truly matter.", "Let's take things one step at a time, and I'll be with you every step of the way.", "I appreciate your trust in sharing your feelings with me.", "We can find professional help together if that's something you're open to.","Your worth isn't defined by your appearance. You're a valuable and unique individual.", "I admire your strength in facing this challenge, and I believe in your ability to overcome it."]
// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    input = input.toLowerCase();
    if (["hello", "hi", "hey"].some(keyword => input.includes(keyword))) {
        return greetings[Math.floor(Math.random() * greetings.length)];
    } 
    else if (["sad","depressed","not feeling well","scared","dark thoughts", "loss of interest", "sleep disturbances", "fatigue", "difficulty concentrating", "feelings of guilt", "worthlessness", "worthless","not feeling good","physical symptoms","lonely","alone", "irritability", "isolation","angry","mood swings"].some(keyword => input.includes(keyword))) {
      return depression_resources[Math.floor(Math.random() * depression_resources.length)];
    }
    else if (["solutions for depression"].some(keyword => input.includes(keyword))) {
        return depression_solution[Math.floor(Math.random() * depression_solution.length)];
    }
    else if (["worry","anxious","panicky","sleeplessness","anxious", "fast heartbeat","sweaty","restless", "irritability", "muscle tension", "fatigue", "difficulty concentrating", "sleep disturbances", "physical symptoms", "excessive fear", "phobias", "panic attacks", "avoidance behavior", "cognitive distortions", "physical symptoms of anxiety disorders", "social withdrawal", "perfectionism", "overthinking", "sensory sensitivity", "compulsive behaviors"].some(keyword => input.includes(keyword))) {
        return anxiety_resources[Math.floor(Math.random() * anxiety_resources.length)];
    }
    else if (["solutions for anxiety"].some(keyword => input.includes(keyword))) {
        return anxiety_solution[Math.floor(Math.random() * anxiety_solution.length)];
    }
    else if (["hallucinations", "delusions", "disorganized thinking", "disorganized", "abnormal motor behavior", "affective", "flattening", "alogia", "anhedonia", "avolition", "impaired Memory", "impaired attention", "impaired executive function"].some(keyword => input.includes(keyword))) {
        return schizophrenia_resources[Math.floor(Math.random() * schizophrenia_resources.length)];
    }
    else if (["anorexia nervosa", "bulimia nervosa", "binge eating","eating disorder"].some(keyword => input.includes(keyword))) {
        return eatingdisorder_resources[Math.floor(Math.random() * eatingdisorder_resources.length)];
    }
    else if (["substance use disorder", "behavioral addictions","drug abuse"].some(keyword => input.includes(keyword))) {
        return addictivebehaviour_resources[Math.floor(Math.random() * addictivebehaviour_resources.length)];
    }
    else if (["preoccupation with appearance", "compulsive behaviors", "avoidance of social situations", "low self-esteem", "time-consuming", "lack of satisfaction"].some(keyword => input.includes(keyword))) {
        return body_dysmorphia_resources[Math.floor(Math.random() * body_dysmorphia_resources.length)];
    }
    else {
        return "Please consider talking to a mental health professional for more help. you can contact this number 9152987821 to call the indian suicide helpline number";
    }
}

console.log("Welcome to the Mental Health Chatbot. You can type 'exit' to end the conversation.");
while (true) {
    const user_input = prompt("You: ");
    if (user_input.toLowerCase() === "exit") {
        console.log("Chatbot: Goodbye!");
        break;
    }
    const response = generateResponse(user_input);
    console.log("Chatbot:", response);
}