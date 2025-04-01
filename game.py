import random

class Entity:
    def __init__(self, name, attributes):
        self.name = name
        self.attributes = attributes

class AIGuesser:
    def __init__(self, category, database):
        self.database = database
        self.possible_answers = database.copy()
        self.previous_guesses = []
        self.tries_left = 10
        
    def make_guess(self, last_feedback=None):
        if last_feedback is not None and last_feedback != 1:
            # Use feedback to update possible answers
            # For now, just remove the last guess
            if self.previous_guesses:
                last_guess = self.previous_guesses[-1]
                if last_guess in self.possible_answers:
                    self.possible_answers.remove(last_guess)
        
        if not self.possible_answers:
            return None
            
        guess = random.choice(self.possible_answers)
        self.previous_guesses.append(guess)
        self.tries_left -= 1
        return guess

# Initial database of football players
football_players = [
    Entity("Lionel Messi", {"position": "forward", "nationality": "Argentina", "club": "Inter Miami"}),
    Entity("Cristiano Ronaldo", {"position": "forward", "nationality": "Portugal", "club": "Al Nassr"}),
    Entity("Robert Lewandowski", {"position": "forward", "nationality": "Poland", "club": "Barcelona"}),
    Entity("Kevin De Bruyne", {"position": "midfielder", "nationality": "Belgium", "club": "Manchester City"}),
    Entity("Erling Haaland", {"position": "forward", "nationality": "Norway", "club": "Manchester City"}),
]

def play_game():
    print("Welcome to the AI Guessing Game!")
    print("Think of a footballer, and I'll try to guess it.")
    print("After each guess, give me a number:")
    print("1 = Correct guess")
    print("Higher numbers = How far off I am (larger = further)")
    
    ai = AIGuesser("football", football_players)
    
    while ai.tries_left > 0:
        guess = ai.make_guess()
        if guess is None:
            print("I'm out of guesses!")
            break
            
        print(f"\nGuess #{11 - ai.tries_left}: {guess.name}")
        print(f"Tries left: {ai.tries_left}")
        
        try:
            feedback = int(input("Enter your feedback (1 = correct, higher number = how far off): "))
            if feedback == 1:
                print("I won! Thanks for playing!")
                return
        except ValueError:
            print("Please enter a valid number")
            continue
    
    print("Game over! I couldn't guess your footballer.")
    answer = input("What was your footballer? ")
    print(f"Ah, it was {answer}! I'll try to do better next time.")

if __name__ == "__main__":
    play_game()