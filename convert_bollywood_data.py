import csv
import json

def convert_bollywood_data():
    # Process actors data
    actors = []
    with open('BollywoodActorRanking.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                # Calculate normalized stats (0-100 scale)
                movie_rank = float(row['normalizedMovieRank'] or 0)
                google_rank = float(row['normalizedGoogleRank'] or 0)
                rating = float(row['normalizedRating'] or 0)
                
                # Create actor object
                actor = {
                    'name': row['actorName'],
                    'attributes': {
                        'role': 'Actor',  # All are actors/actresses
                        'nationality': 'Indian',  # All are Indian actors
                        'stats': {
                            'popularity': min(100, int(google_rank * 10)),  # Scale 0-10 to 0-100
                            'performance': min(100, int(rating * 10)),  # Scale 0-10 to 0-100
                            'versatility': min(100, int(movie_rank * 10)),  # Scale 0-10 to 0-100
                            'experience': min(100, int(float(row['movieCount']) / 50 * 100)),  # 50 movies is max
                            'box_office': min(100, int(float(row['ratingSum']) / 3000 * 100)),  # 3000 is max
                            'star_power': min(100, int((google_rank + rating) / 2 * 10))  # Average of popularity and rating
                        },
                        'achievements': [
                            f"{row['movieCount']} Movies",
                            f"{int(float(row['ratingSum']))} Total Rating Points",
                            f"#{row['actorId']} in Rankings"
                        ],
                        'movie_count': int(row['movieCount']),
                        'rating_sum': int(float(row['ratingSum'])),
                        'google_hits': int(float(row.get('googleHits', 0) or 0))
                    }
                }
                
                # Only add actors with valid names
                if actor['name'] and actor['name'].strip():
                    actors.append(actor)
                
            except (ValueError, KeyError) as e:
                continue

    # Write to JavaScript file
    with open('bollywood_data.js', 'w', encoding='utf-8') as f:
        f.write('const bollywoodActors = ')
        json.dump(actors, f, indent=2)
        f.write(';')
        print(f"Processed {len(actors)} actors")

if __name__ == '__main__':
    convert_bollywood_data()