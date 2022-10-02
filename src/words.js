var programmingLanguages = [
    'elephant', 
    'lion', 
    'tiger', 
    'horse', 
    'cat', 
    'bear', 
    'fox', 
    'monkey', 
    'goat', 
    'pig',
    'cow',
    'camel',
    'donkey',
    'snake',
    'deer'
]

export function randomWord() {
    return programmingLanguages[Math.floor(Math.random()*programmingLanguages.length)]
}