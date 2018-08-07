const BREEDCHOICESDATA = [
  {
    choices: ["Fox Terrier", "Boston Terrier", "Welsh Terrier", "Irish Terrier"],
    correctChoiceIndex: 2
    
  },
  {
    choices: ["Poodle", "Border Collie", "Beagle", "Basset Hound"],
    correctChoiceIndex: 1
   
  },
  {
    choices: ["Bolognese", "Scottish Terrier", "Pekingese", "Maltese"],
    correctChoiceIndex: 3
    
  },
  {
    choices: ["Schnauzer", "Wired Fox Terrier", "Airedale Terrier", "Chinook"],
    correctChoiceIndex: 1
    
  },
  {
    choices: ["Jack Russell Terrier", "Irish Setter", "Irish Terrier", "Golden Retriever"],
    correctChoiceIndex: 2
    
  },
  {
    choices: ["Yorkshire Terrier", "Dachshund", "Irish Terrier", "Shih Tzu"],
    correctChoiceIndex: 3
    
  },
  {
    choices: ["Rottweiler", "Pit Bull Terrier", "Afghan Hound", "German Shepherd"],
    correctChoiceIndex: 0
    
  },
  {
    choices: ["Rottweiler", "Beagle", "Afghan Hound", "German Shepherd"],
    correctChoiceIndex: 1
   
  },
  {
    choices: ["Siberian Husky", "English Setter", "Dalmatian", "Cocker Spaniel"],
    correctChoiceIndex: 0
   
  },
  {
    choices: ["Lakeland Terrier", "Cairn Terrier", "Pomeranian", "Schnauzer"],
    correctChoiceIndex: 2
   
  }
];

const DOGBREEDDATA = [
  {
    name: "Welsh Terrier",
    disposition: "Friendly, intelligent, vigilant and somewhat calmer than some terrier breeds",
    size: "Average height of about 15 inches and weight of 25 pounds",
    health: "This breed tends to be extremely healthy with a typical life span of 13 to 15 years",
    imagePathQuestion: "images/welshTerrier.jpg",
    imagePathAnswer: "images/welshTerrier2.jpg",
    hint: "Terrier with a black and tan coat and about 25 pounds"
  },
  {
    name: "Border Collie",
    disposition: "Athletic, trainable and very aware of its surroundings",
    size: "Typical height of about 20 inches and weight of 30 - 40 pounds ",
    health: "Epilepsy, hip dysplasia, eye problems and deafness are common, with a life span of 12 - 15 years", 
    imagePathQuestion: "images/borderCollie.jpg",
    imagePathAnswer: "images/borderCollie2.jpg",
    hint: "Athletic Collie with a black and white coat and 30 - 40 pounds. This breed is known for working livestock and sheep"
  },
  {
    name: "Maltese",
    disposition: "Hardy, trusting and devoted",
    size: "Average 9 inches tall with a weight of 7 - 9 pounds",
    health: "Will suffer sunburn because of hair parting - also may be reluctant to eat because of digestive problems", 
    imagePathQuestion: "images/maltese.jpg",
    imagePathAnswer: "images/maltese2.jpg",
    hint: "A small peaceful breed with a white coat and average of 9 inches tall and 7 - 9 pounds"
  },
  {
    name: "Wired Fox Terrier",
    disposition: "Brave, bold and playful",
    size: "Average height of about 15 inches and weight of 20 pounds",
    health: "Prone to epilepsy, with a typical life span of about 15 years", 
    imagePathQuestion: "images/wiredFoxTerrier.jpg",
    imagePathAnswer: "images/wiredFoxTerrier2.jpg",
    hint: "Lively Terrier breed with a white, black and tan coat and a weight of about 20 pounds"
  },
  {
    name: "Irish Terrier",
    disposition: "Adventurous, courageous and inquisitive - they are often referred to as daredevels",
    size: "Average height of 18 inches and weight of 26 pounds",
    health: "This breed has no known hereditary disorders - the life expectancy is 12 - 15 years", 
    imagePathQuestion: "images/irishTerrier.jpg",
    imagePathAnswer: "images/irishTerrier2.jpg",
    hint: "Terrier breed with a solid red coat and a weight of around 25 - 30 pounds"
  },
  {
    name: "Shih Tzu",
    disposition:  "Sturdy, friendly and clever",
    size: "A typical height of 10 inches and weighs from 9 - 16 pounds",
    health: "Stifle, spinal disc disease, cherry eye, ear infections and early tooth loss have been observed - the life span is typically 15 years or more", 
    imagePathQuestion: "images/shihTzu.jpg",
    imagePathAnswer: "images/shihTzu2.jpg",
    hint: "Sweet tempered breed from ancient China - white coat and weights 9 - 15 pounds"
  },
  {
    name: "Rottweiler",
    disposition: "Powerful, calm and devoted" ,
    size: "Roughly 24 inches tall and 90 - 130 pounds",
    health: "Susceptible to knee tendon problems, hip displacia and tends to overeat and snore - life expectancy is 10 -12 years", 
    imagePathQuestion: "images/rottweiler.jpg",
    imagePathAnswer: "images/rottweiler2.jpg",
    hint: "Rowdy, loyal and muscular breed with a black coat and weighs 90 - 130 pounds"
  },
  {
    name: "Beagle",
    disposition: "Loving, watchful and sociable",
    size: "About an average height of 14 inches and weight of 23 pounds",
    health: "Epilepsy, dwarfism, heart and back problems are typical", 
    imagePathQuestion: "images/beagle.jpg",
    imagePathAnswer: "images/beagle2.jpg",
    hint: "A handsome hunting hound breed with a black, brown and white coat - weighs 20 - 25 pounds"

  },
  {
    name: "Siberian Husky",
    disposition: "Keen, gentle and relaxed",
    size: "Height averages about 22 inches and weight 55 pounds",
    health: "Displacia, ectopy and eye problems are common - the life expectancy is 12 - 15 years", 
    imagePathQuestion: "images/siberianHusky.jpg",
    imagePathAnswer: "images/siberianHusky2.jpg",
    hint: "A free-spirited breed known for pulling sleds - weighs around 50 - 60 pounds with a black and white coat"
  },
  {
    name: "Pomeranian", 
    disposition: "Proud, lively and loyal",
    size: " Height of 7 - 12 inches and weight of 3 - 7 pounds",
    health: "Prone to dislocated kneecap, heart problems and early tooth decay - the typical lifespan is about 15 years", 
    imagePathQuestion: "images/pomeranian.jpg",
    imagePathAnswer: "images/pomeranian2.jpg",
    hint: "Sharp-eyed busybody breed with a white coat and cat-like face weighing from 3 - 7 pounds"
  }

];

const BREEDQUESTIONS = [
  "What breed of dog is this ?",
  "Can you guess the breed of this dog ?",
  "What is the breed of this dog ?"
];

 