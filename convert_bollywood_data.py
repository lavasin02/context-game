import csv
import json

def read_csv_data(filename):
    actors = []
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                try:
                    # Create actor object with standardized stats
                    actor = {
                        'name': row['name'],
                        'attributes': {
                            'role': 'Actor',
                            'nationality': 'Indian',
                            'stats': {
                                'popularity': int(float(row['popularity'])),
                                'performance': int(float(row['performance'])),
                                'versatility': int(float(row['versatility'])),
                                'experience': int(float(row['experience'])),
                                'box_office': int(float(row['box_office'])),
                                'star_power': int(float(row['star_power']))
                            },
                            'achievements': eval(row['achievements']) if isinstance(row['achievements'], str) else [
                                f"{row['movie_count']} Movies",
                                f"{row['rating_sum']} Total Rating Points",
                                row.get('achievements', 'Rising Star')
                            ],
                            'movie_count': int(float(row['movie_count'])),
                            'rating_sum': int(float(row['rating_sum'])),
                            'google_hits': int(float(row.get('google_hits', 0)))
                        }
                    }
                    actors.append(actor)
                except (ValueError, KeyError) as e:
                    print(f"Error processing row in {filename}: {e}")
                    continue
    except FileNotFoundError:
        print(f"Warning: {filename} not found")
    return actors

def convert_bollywood_data():
    # Read from the two new sources
    actors = []
    
    # Read from top actors file
    top_actors = read_csv_data('bollywood_top_actors.csv')
    actors.extend(top_actors)
    
    # Read from emerging actors file
    emerging_actors = read_csv_data('bollywood_emerging_actors.csv')
    actors.extend(emerging_actors)
    
    # Sort by star power
    actors.sort(key=lambda x: x['attributes']['stats']['star_power'], reverse=True)
    
    # Write to JavaScript file
    with open('bollywood_data.js', 'w', encoding='utf-8') as f:
        f.write('const bollywoodActors = ')
        json.dump(actors, f, indent=2)
        f.write(';')
        print(f"Processed {len(actors)} actors")

if __name__ == '__main__':
    convert_bollywood_data()