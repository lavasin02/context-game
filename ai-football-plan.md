# AI Football Guessing Game Enhancement Plan

## Data Structure
- Expand player attributes:
  - Basic: name, position, nationality, club, league
  - Stats: goals, assists, matches, rating
  - Historical: era, achievements, peak_rating
  - Physical: height, weight, foot
  - Style: playing_style, role, skill_moves

## AI Implementation
1. Use TensorFlow.js for local browser-based AI
2. Convert player attributes to vectors:
   - Text fields: Word embeddings
   - Numerical fields: Normalized values
   - Categorical fields: One-hot encoding
3. Calculate similarity using:
   - Cosine similarity for main score
   - Weighted attribute matching
   - Era-based adjustments

## Implementation Steps
1. Add TensorFlow.js
2. Create embeddings helper
3. Expand player database
4. Implement vector conversion
5. Create similarity calculator
6. Update UI to show more player info