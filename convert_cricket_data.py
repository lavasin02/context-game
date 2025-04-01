import csv
import json
from datetime import datetime

def calculate_age(dateofbirth):
    try:
        dob = datetime.strptime(dateofbirth, '%Y-%m-%d')
        today = datetime.now()
        age = today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))
        return age
    except:
        return 25  # default age if date is invalid

def convert_cricket_data():
    # Load teams data first
    teams = {}
    with open('teams.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            teams[row['id']] = {
                'name': row['name'],
                'code': row['code'],
                'country': row['name'] if row['national_team'] == 'TRUE' else None
            }

    # Process players data
    players = []
    with open('players_data_with_all_info.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                # Calculate age from dateofbirth
                age = calculate_age(row['dateofbirth'])
                
                # Create player object with available data
                player = {
                    'name': row['fullname'],
                    'attributes': {
                        'role': row['position'] or 'Unknown',
                        'batting_style': row['battingstyle'] or 'Unknown',
                        'bowling_style': row['bowlingstyle'] or 'None',
                        'nationality': row['country_name'] or 'Unknown',
                        'teams': [],  # We'll need to get this from another source
                        'stats': {
                            'batting': 75,  # Default stats since they're not in the CSV
                            'bowling': 75,
                            'fielding': 75,
                            'experience': 80,
                            'match_impact': 80,
                            'consistency': 80
                        },
                        'achievements': ['Active Player'],
                        'age': age,
                        'height': 175,  # Default height since it's not in the CSV
                        'matches': {
                            'tests': 0,
                            'odis': 0,
                            't20is': 0
                        }
                    }
                }

                # Only add players with valid names
                if player['name'] and player['name'].strip() and player['name'] != 'Unknown':
                    players.append(player)
                
            except (ValueError, KeyError) as e:
                continue

    # Write to JavaScript file
    with open('cricket_data.js', 'w', encoding='utf-8') as f:
        f.write('const cricketPlayers = ')
        json.dump(players, f, indent=2)
        f.write(';')
        print(f"Processed {len(players)} players")

if __name__ == '__main__':
    convert_cricket_data()