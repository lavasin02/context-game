import csv
import json

def convert_fifa_data():
    with open('fifa_players.csv', 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        players = []
        for row in reader:
            try:
                # Calculate average stats for main categories
                shooting = sum([
                    int(row['finishing']), 
                    int(row['shot_power']), 
                    int(row['long_shots']),
                    int(row['volleys']),
                    int(row['penalties'])
                ]) // 5

                passing = sum([
                    int(row['short_passing']),
                    int(row['long_passing']),
                    int(row['crossing']),
                    int(row['curve']),
                    int(row['freekick_accuracy']),
                    int(row['vision'])
                ]) // 6

                pace = sum([
                    int(row['acceleration']),
                    int(row['sprint_speed'])
                ]) // 2

                dribbling = sum([
                    int(row['dribbling']),
                    int(row['ball_control']),
                    int(row['agility']),
                    int(row['balance']),
                    int(row['reactions']),
                    int(row['composure'])
                ]) // 6

                defending = sum([
                    int(row['marking']),
                    int(row['standing_tackle']),
                    int(row['sliding_tackle']),
                    int(row['interceptions'])
                ]) // 4

                physical = sum([
                    int(row['stamina']),
                    int(row['strength']),
                    int(row['jumping']),
                    int(row['aggression'])
                ]) // 4

                player = {
                    'name': row['name'],
                    'attributes': {
                        'positions': row['positions'].split(','),
                        'nationality': row['nationality'],
                        'overall': int(row['overall_rating']),
                        'age': int(row['age']),
                        'height': int(float(row['height_cm'])),
                        'weight': int(float(row['weight_kgs'])),
                        'preferred_foot': row['preferred_foot'],
                        'stats': {
                            'pace': pace,
                            'shooting': shooting,
                            'passing': passing,
                            'dribbling': dribbling,
                            'defending': defending,
                            'physical': physical
                        }
                    }
                }
                players.append(player)
                
                if len(players) % 100 == 0:
                    print(f"Processed {len(players)} players...")
                    
            except (ValueError, KeyError) as e:
                continue

        print(f"Finished processing {len(players)} players")

        # Write to a JavaScript file
        with open('fifa_data.js', 'w', encoding='utf-8') as f:
            f.write('const fifaPlayers = ')
            json.dump(players, f, indent=2)
            f.write(';')

if __name__ == '__main__':
    convert_fifa_data()