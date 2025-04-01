const cricketPlayers = [
  {
    "name": "Sachin Tendulkar",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "India",
      "teams": ["India", "Mumbai Indians"],
      "stats": {
        "batting": 95,
        "bowling": 60,
        "fielding": 80,
        "experience": 98,
        "match_impact": 95,
        "consistency": 92
      },
      "achievements": ["100 International Centuries", "Highest Run-Scorer in Tests and ODIs", "Bharat Ratna"],
      "age": 51, // Born 1973
      "height": 165,
      "matches": { "tests": 200, "odis": 463, "t20is": 1 }
    }
  },
  {
    "name": "Don Bradman",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "Australia",
      "teams": ["Australia"],
      "stats": {
        "batting": 99,
        "bowling": 50,
        "fielding": 75,
        "experience": 90,
        "match_impact": 98,
        "consistency": 99
      },
      "achievements": ["Test Batting Average of 99.94", "Most Runs in a Series (974)"],
      "age": 116, // Born 1908, deceased
      "height": 170,
      "matches": { "tests": 52, "odis": 0, "t20is": 0 }
    }
  },
  {
    "name": "Vivian Richards",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 92,
        "bowling": 65,
        "fielding": 85,
        "experience": 88,
        "match_impact": 94,
        "consistency": 90
      },
      "achievements": ["Two World Cup Wins (1975, 1979)", "Fastest Test Century (56 balls)"],
      "age": 73, // Born 1952
      "height": 175,
      "matches": { "tests": 121, "odis": 187, "t20is": 0 }
    }
  },
  {
    "name": "Virat Kohli",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "India",
      "teams": ["India", "Royal Challengers Bangalore"],
      "stats": {
        "batting": 94,
        "bowling": 55,
        "fielding": 90,
        "experience": 85,
        "match_impact": 93,
        "consistency": 91
      },
      "achievements": ["Fastest to 12,000 ODI Runs", "2011 World Cup Winner", "ICC Cricketer of Decade"],
      "age": 36, // Born 1988
      "height": 175,
      "matches": { "tests": 113, "odis": 292, "t20is": 117 }
    }
  },
  {
    "name": "Brian Lara",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 93,
        "bowling": 50,
        "fielding": 80,
        "experience": 87,
        "match_impact": 92,
        "consistency": 88
      },
      "achievements": ["Highest Test Score (400*)", "Two Test Triple Centuries"],
      "age": 55, // Born 1969
      "height": 173,
      "matches": { "tests": 131, "odis": 299, "t20is": 0 }
    }
  },
  {
    "name": "Shane Warne",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "Australia",
      "teams": ["Australia", "Rajasthan Royals"],
      "stats": {
        "batting": 65,
        "bowling": 96,
        "fielding": 80,
        "experience": 90,
        "match_impact": 95,
        "consistency": 92
      },
      "achievements": ["Most Test Wickets by a Spinner (708)", "1999 World Cup Winner"],
      "age": 55, // Born 1969, deceased
      "height": 183,
      "matches": { "tests": 145, "odis": 194, "t20is": 0 }
    }
  },
  {
    "name": "Muttiah Muralitharan",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "Sri Lanka",
      "teams": ["Sri Lanka", "Chennai Super Kings"],
      "stats": {
        "batting": 50,
        "bowling": 98,
        "fielding": 75,
        "experience": 92,
        "match_impact": 96,
        "consistency": 94
      },
      "achievements": ["Most International Wickets (1,347)", "2011 World Cup Runner-Up"],
      "age": 52, // Born 1972
      "height": 170,
      "matches": { "tests": 133, "odis": 350, "t20is": 12 }
    }
  },
  {
    "name": "Imran Khan",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "Pakistan",
      "teams": ["Pakistan"],
      "stats": {
        "batting": 85,
        "bowling": 88,
        "fielding": 80,
        "experience": 90,
        "match_impact": 92,
        "consistency": 87
      },
      "achievements": ["1992 World Cup Winner", "Over 3,800 Runs and 362 Wickets in Tests"],
      "age": 72, // Born 1952
      "height": 182,
      "matches": { "tests": 88, "odis": 175, "t20is": 0 }
    }
  },
  {
    "name": "Jacques Kallis",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast-medium",
      "nationality": "South Africa",
      "teams": ["South Africa", "Kolkata Knight Riders"],
      "stats": {
        "batting": 90,
        "bowling": 85,
        "fielding": 85,
        "experience": 90,
        "match_impact": 90,
        "consistency": 91
      },
      "achievements": ["Most All-Round Stats in Tests (13,289 Runs, 292 Wickets)", "2011 World Cup Quarter-Finalist"],
      "age": 49, // Born 1975
      "height": 182,
      "matches": { "tests": 166, "odis": 328, "t20is": 25 }
    }
  },
  {
    "name": "Ricky Ponting",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "Australia",
      "teams": ["Australia", "Mumbai Indians"],
      "stats": {
        "batting": 92,
        "bowling": 50,
        "fielding": 88,
        "experience": 90,
        "match_impact": 93,
        "consistency": 90
      },
      "achievements": ["Three World Cup Wins (1999, 2003, 2007)", "Over 13,000 Test Runs"],
      "age": 50, // Born 1974
      "height": 178,
      "matches": { "tests": 168, "odis": 375, "t20is": 17 }
    }
  },
  {
    "name": "Kapil Dev",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast-medium",
      "nationality": "India",
      "teams": ["India"],
      "stats": {
        "batting": 80,
        "bowling": 90,
        "fielding": 85,
        "experience": 88,
        "match_impact": 92,
        "consistency": 85
      },
      "achievements": ["1983 World Cup Winner", "First Indian to 400 Test Wickets"],
      "age": 66, // Born 1959
      "height": 183,
      "matches": { "tests": 131, "odis": 225, "t20is": 0 }
    }
  },
  {
    "name": "Wasim Akram",
    "attributes": {
      "role": "Bowler",
      "batting_style": "left-hand-bat",
      "bowling_style": "left-arm-fast",
      "nationality": "Pakistan",
      "teams": ["Pakistan"],
      "stats": {
        "batting": 70,
        "bowling": 95,
        "fielding": 80,
        "experience": 90,
        "match_impact": 94,
        "consistency": 90
      },
      "achievements": ["First to 500 ODI Wickets", "1992 World Cup Winner"],
      "age": 58, // Born 1966
      "height": 188,
      "matches": { "tests": 104, "odis": 356, "t20is": 0 }
    }
  },
  {
    "name": "Garfield Sobers",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "left-hand-bat",
      "bowling_style": "left-arm-fast-medium",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 90,
        "bowling": 88,
        "fielding": 85,
        "experience": 90,
        "match_impact": 92,
        "consistency": 89
      },
      "achievements": ["First to Hit Six Sixes in an Over", "Highest Test Score at the Time (365)"],
      "age": 88, // Born 1936
      "height": 180,
      "matches": { "tests": 93, "odis": 1, "t20is": 0 }
    }
  },
  {
    "name": "Steve Smith",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "Australia",
      "teams": ["Australia", "Rajasthan Royals"],
      "stats": {
        "batting": 93,
        "bowling": 60,
        "fielding": 85,
        "experience": 85,
        "match_impact": 90,
        "consistency": 92
      },
      "achievements": ["Highest Test Batting Rating Since Bradman", "2015 World Cup Winner"],
      "age": 35, // Born 1989
      "height": 176,
      "matches": { "tests": 109, "odis": 158, "t20is": 67 }
    }
  },
  {
    "name": "Kumar Sangakkara",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "none",
      "nationality": "Sri Lanka",
      "teams": ["Sri Lanka", "Kings XI Punjab"],
      "stats": {
        "batting": 91,
        "bowling": 0,
        "fielding": 90,
        "experience": 88,
        "match_impact": 89,
        "consistency": 90
      },
      "achievements": ["Most ODI Runs by a Sri Lankan", "2014 T20 World Cup Winner"],
      "age": 47, // Born 1977
      "height": 178,
      "matches": { "tests": 134, "odis": 404, "t20is": 56 }
    }
  },
  {
    "name": "Joe Root",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "England",
      "teams": ["England", "Rajasthan Royals"],
      "stats": {
        "batting": 92,
        "bowling": 60,
        "fielding": 85,
        "experience": 85,
        "match_impact": 90,
        "consistency": 91
      },
      "achievements": ["Fastest to 10,000 Test Runs by an Englishman", "2022 T20 World Cup Winner"],
      "age": 34, // Born 1990
      "height": 183,
      "matches": { "tests": 148, "odis": 171, "t20is": 32 }
    }
  },
  {
    "name": "Glenn McGrath",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast-medium",
      "nationality": "Australia",
      "teams": ["Australia", "Delhi Daredevils"],
      "stats": {
        "batting": 50,
        "bowling": 94,
        "fielding": 80,
        "experience": 90,
        "match_impact": 93,
        "consistency": 92
      },
      "achievements": ["Most World Cup Wickets (71)", "Three World Cup Wins (1999, 2003, 2007)"],
      "age": 55, // Born 1970
      "height": 195,
      "matches": { "tests": 124, "odis": 250, "t20is": 2 }
    }
  },
  {
    "name": "AB de Villiers",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "South Africa",
      "teams": ["South Africa", "Royal Challengers Bangalore"],
      "stats": {
        "batting": 93,
        "bowling": 50,
        "fielding": 95,
        "experience": 85,
        "match_impact": 92,
        "consistency": 89
      },
      "achievements": ["Fastest ODI Century (31 balls)", "Over 9,000 ODI Runs"],
      "age": 41, // Born 1984
      "height": 180,
      "matches": { "tests": 114, "odis": 228, "t20is": 78 }
    }
  },
  {
    "name": "MS Dhoni",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "India",
      "teams": ["India", "Chennai Super Kings"],
      "stats": {
        "batting": 85,
        "bowling": 50,
        "fielding": 95,
        "experience": 90,
        "match_impact": 92,
        "consistency": 88
      },
      "achievements": ["Three ICC Trophies (2007 T20, 2011 ODI, 2013 Champions)", "Most Wins as Captain"],
      "age": 43, // Born 1981
      "height": 175,
      "matches": { "tests": 90, "odis": 350, "t20is": 98 }
    }
  },
  {
    "name": "Kane Williamson",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "New Zealand",
      "teams": ["New Zealand", "Sunrisers Hyderabad"],
      "stats": {
        "batting": 92,
        "bowling": 60,
        "fielding": 85,
        "experience": 85,
        "match_impact": 90,
        "consistency": 93
      },
      "achievements": ["2021 World Test Championship Winner", "Over 8,000 Test Runs"],
      "age": 34, // Born 1990
      "height": 178,
      "matches": { "tests": 100, "odis": 165, "t20is": 87 }
    }
  },
  {
    "name": "Ian Botham",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast-medium",
      "nationality": "England",
      "teams": ["England"],
      "stats": {
        "batting": 85,
        "bowling": 90,
        "fielding": 80,
        "experience": 88,
        "match_impact": 92,
        "consistency": 85
      },
      "achievements": ["Over 5,000 Runs and 383 Wickets in Tests", "1981 Ashes Hero"],
      "age": 69, // Born 1955
      "height": 183,
      "matches": { "tests": 102, "odis": 116, "t20is": 0 }
    }
  },
  {
    "name": "Chris Gayle",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "West Indies",
      "teams": ["West Indies", "Royal Challengers Bangalore"],
      "stats": {
        "batting": 90,
        "bowling": 60,
        "fielding": 80,
        "experience": 85,
        "match_impact": 91,
        "consistency": 85
      },
      "achievements": ["Two Test Triple Centuries", "Most T20 Runs"],
      "age": 45, // Born 1979
      "height": 188,
      "matches": { "tests": 103, "odis": 301, "t20is": 79 }
    }
  },
  {
    "name": "Adam Gilchrist",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "none",
      "nationality": "Australia",
      "teams": ["Australia", "Deccan Chargers"],
      "stats": {
        "batting": 90,
        "bowling": 0,
        "fielding": 95,
        "experience": 85,
        "match_impact": 90,
        "consistency": 88
      },
      "achievements": ["Three World Cup Wins (1999, 2003, 2007)", "Fastest Test Double Century"],
      "age": 53, // Born 1971
      "height": 186,
      "matches": { "tests": 96, "odis": 287, "t20is": 13 }
    }
  },
  {
    "name": "Sunil Gavaskar",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "India",
      "teams": ["India"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 80,
        "experience": 88,
        "match_impact": 89,
        "consistency": 90
      },
      "achievements": ["First to 10,000 Test Runs", "34 Test Centuries"],
      "age": 75, // Born 1949
      "height": 165,
      "matches": { "tests": 125, "odis": 108, "t20is": 0 }
    }
  },
  {
    "name": "Shoaib Akhtar",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "Pakistan",
      "teams": ["Pakistan", "Kolkata Knight Riders"],
      "stats": {
        "batting": 60,
        "bowling": 93,
        "fielding": 75,
        "experience": 85,
        "match_impact": 90,
        "consistency": 85
      },
      "achievements": ["Fastest Recorded Delivery (161.3 kph)", "Over 400 International Wickets"],
      "age": 49, // Born 1975
      "height": 183,
      "matches": { "tests": 46, "odis": 163, "t20is": 15 }
    }
  },
  {
    "name": "Richard Hadlee",
    "attributes": {
      "role": "Bowler",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "New Zealand",
      "teams": ["New Zealand"],
      "stats": {
        "batting": 70,
        "bowling": 94,
        "fielding": 80,
        "experience": 88,
        "match_impact": 92,
        "consistency": 90
      },
      "achievements": ["First to 400 Test Wickets", "Over 3,000 Test Runs"],
      "age": 73, // Born 1951
      "height": 185,
      "matches": { "tests": 86, "odis": 115, "t20is": 0 }
    }
  },
  {
    "name": "Curtly Ambrose",
    "attributes": {
      "role": "Bowler",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 50,
        "bowling": 95,
        "fielding": 80,
        "experience": 88,
        "match_impact": 93,
        "consistency": 91
      },
      "achievements": ["Over 400 Test Wickets", "Dominant in 1990s West Indies Pace Attack"],
      "age": 61, // Born 1963
      "height": 201,
      "matches": { "tests": 98, "odis": 176, "t20is": 0 }
    }
  },
  {
    "name": "Rahul Dravid",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "India",
      "teams": ["India", "Rajasthan Royals"],
      "stats": {
        "batting": 91,
        "bowling": 50,
        "fielding": 85,
        "experience": 90,
        "match_impact": 88,
        "consistency": 92
      },
      "achievements": ["Over 13,000 Test Runs", "Most Catches by a Fielder in Tests (210)"],
      "age": 52, // Born 1973
      "height": 180,
      "matches": { "tests": 164, "odis": 344, "t20is": 1 }
    }
  },
  {
    "name": "James Anderson",
    "attributes": {
      "role": "Bowler",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-fast-medium",
      "nationality": "England",
      "teams": ["England"],
      "stats": {
        "batting": 50,
        "bowling": 95,
        "fielding": 80,
        "experience": 95,
        "match_impact": 92,
        "consistency": 93
      },
      "achievements": ["Most Test Wickets by a Fast Bowler (700+)", "2022 T20 World Cup Winner"],
      "age": 42, // Born 1982
      "height": 188,
      "matches": { "tests": 187, "odis": 194, "t20is": 19 }
    }
  },
  {
    "name": "Ben Stokes",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-fast-medium",
      "nationality": "England",
      "teams": ["England", "Rajasthan Royals"],
      "stats": {
        "batting": 85,
        "bowling": 85,
        "fielding": 90,
        "experience": 85,
        "match_impact": 93,
        "consistency": 87
      },
      "achievements": ["2019 World Cup Final Hero", "2022 T20 World Cup Winner"],
      "age": 33, // Born 1991
      "height": 185,
      "matches": { "tests": 102, "odis": 114, "t20is": 43 }
    }
  },
  {
    "name": "Anil Kumble",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "India",
      "teams": ["India", "Royal Challengers Bangalore"],
      "stats": {
        "batting": 60,
        "bowling": 94,
        "fielding": 75,
        "experience": 90,
        "match_impact": 92,
        "consistency": 90
      },
      "achievements": ["10 Wickets in an Innings", "Over 600 Test Wickets"],
      "age": 54, // Born 1970
      "height": 185,
      "matches": { "tests": 132, "odis": 271, "t20is": 0 }
    }
  },
  {
    "name": "Allan Border",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "left-arm-orthodox",
      "nationality": "Australia",
      "teams": ["Australia"],
      "stats": {
        "batting": 90,
        "bowling": 60,
        "fielding": 85,
        "experience": 90,
        "match_impact": 89,
        "consistency": 91
      },
      "achievements": ["Most Test Runs at Retirement (11,174)", "1987 World Cup Winner"],
      "age": 69, // Born 1955
      "height": 175,
      "matches": { "tests": 156, "odis": 273, "t20is": 0 }
    }
  },
  {
    "name": "Shaun Pollock",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast-medium",
      "nationality": "South Africa",
      "teams": ["South Africa", "Mumbai Indians"],
      "stats": {
        "batting": 80,
        "bowling": 90,
        "fielding": 85,
        "experience": 88,
        "match_impact": 89,
        "consistency": 90
      },
      "achievements": ["Over 400 Test Wickets", "Over 3,000 Test Runs"],
      "age": 51, // Born 1973
      "height": 186,
      "matches": { "tests": 108, "odis": 303, "t20is": 12 }
    }
  },
  {
    "name": "Sanath Jayasuriya",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "left-hand-bat",
      "bowling_style": "left-arm-orthodox",
      "nationality": "Sri Lanka",
      "teams": ["Sri Lanka", "Mumbai Indians"],
      "stats": {
        "batting": 88,
        "bowling": 85,
        "fielding": 80,
        "experience": 88,
        "match_impact": 90,
        "consistency": 85
      },
      "achievements": ["1996 World Cup Winner", "Over 13,000 ODI Runs"],
      "age": 55, // Born 1969
      "height": 170,
      "matches": { "tests": 110, "odis": 445, "t20is": 31 }
    }
  },
  {
    "name": "Waqar Younis",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "Pakistan",
      "teams": ["Pakistan"],
      "stats": {
        "batting": 60,
        "bowling": 93,
        "fielding": 75,
        "experience": 88,
        "match_impact": 91,
        "consistency": 89
      },
      "achievements": ["Over 400 ODI Wickets", "1992 World Cup Winner"],
      "age": 53, // Born 1971
      "height": 180,
      "matches": { "tests": 87, "odis": 262, "t20is": 0 }
    }
  },
  {
    "name": "Jack Hobbs",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "England",
      "teams": ["England"],
      "stats": {
        "batting": 92,
        "bowling": 50,
        "fielding": 80,
        "experience": 90,
        "match_impact": 89,
        "consistency": 93
      },
      "achievements": ["Most First-Class Runs (61,760)", "199 Centuries"],
      "age": 142, // Born 1882, deceased
      "height": 178,
      "matches": { "tests": 61, "odis": 0, "t20is": 0 }
    }
  },
  {
    "name": "Steve Waugh",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "Australia",
      "teams": ["Australia"],
      "stats": {
        "batting": 90,
        "bowling": 60,
        "fielding": 85,
        "experience": 90,
        "match_impact": 90,
        "consistency": 91
      },
      "achievements": ["Two World Cup Wins (1987, 1999)", "Over 10,000 Test Runs"],
      "age": 59, // Born 1965
      "height": 183,
      "matches": { "tests": 168, "odis": 325, "t20is": 0 }
    }
  },
  {
    "name": "Lasith Malinga",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "Sri Lanka",
      "teams": ["Sri Lanka", "Mumbai Indians"],
      "stats": {
        "batting": 50,
        "bowling": 93,
        "fielding": 75,
        "experience": 85,
        "match_impact": 92,
        "consistency": 88
      },
      "achievements": ["Four Wickets in Four Balls (T20)", "2014 T20 World Cup Winner"],
      "age": 41, // Born 1983
      "height": 170,
      "matches": { "tests": 30, "odis": 226, "t20is": 84 }
    }
  },
  {
    "name": "Dale Steyn",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "South Africa",
      "teams": ["South Africa", "Royal Challengers Bangalore"],
      "stats": {
        "batting": 60,
        "bowling": 95,
        "fielding": 80,
        "experience": 85,
        "match_impact": 93,
        "consistency": 90
      },
      "achievements": ["Fastest to 400 Test Wickets by Balls Bowled", "ICC Test Bowler of Decade"],
      "age": 41, // Born 1983
      "height": 179,
      "matches": { "tests": 93, "odis": 125, "t20is": 47 }
    }
  },
  {
    "name": "Brett Lee",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "Australia",
      "teams": ["Australia", "Kings XI Punjab"],
      "stats": {
        "batting": 60,
        "bowling": 92,
        "fielding": 80,
        "experience": 85,
        "match_impact": 90,
        "consistency": 88
      },
      "achievements": ["Two World Cup Wins (2003, 2007)", "Over 700 International Wickets"],
      "age": 48, // Born 1976
      "height": 187,
      "matches": { "tests": 76, "odis": 221, "t20is": 25 }
    }
  },
  {
    "name": "Shahid Afridi",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "Pakistan",
      "teams": ["Pakistan", "Deccan Chargers"],
      "stats": {
        "batting": 85,
        "bowling": 85,
        "fielding": 80,
        "experience": 85,
        "match_impact": 90,
        "consistency": 80
      },
      "achievements": ["Fastest ODI Century (37 balls)", "2009 T20 World Cup Winner"],
      "age": 45, // Born 1980
      "height": 182,
      "matches": { "tests": 27, "odis": 398, "t20is": 99 }
    }
  },
  {
    "name": "Clive Lloyd",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 85,
        "experience": 88,
        "match_impact": 91,
        "consistency": 89
      },
      "achievements": ["Two World Cup Wins as Captain (1975, 1979)", "Over 7,000 Test Runs"],
      "age": 80, // Born 1944
      "height": 193,
      "matches": { "tests": 110, "odis": 87, "t20is": 0 }
    }
  },
  {
    "name": "Alastair Cook",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "England",
      "teams": ["England"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 85,
        "experience": 90,
        "match_impact": 88,
        "consistency": 92
      },
      "achievements": ["Most Test Runs by an Englishman (12,472)", "33 Test Centuries"],
      "age": 40, // Born 1984
      "height": 188,
      "matches": { "tests": 161, "odis": 92, "t20is": 4 }
    }
  },
  {
    "name": "Ross Taylor",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "New Zealand",
      "teams": ["New Zealand", "Royal Challengers Bangalore"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 85,
        "experience": 85,
        "match_impact": 89,
        "consistency": 90
      },
      "achievements": ["Most Runs by a New Zealander Across Formats", "2021 WTC Winner"],
      "age": 41, // Born 1984
      "height": 183,
      "matches": { "tests": 112, "odis": 236, "t20is": 102 }
    }
  },
  {
    "name": "Javed Miandad",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "Pakistan",
      "teams": ["Pakistan"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 80,
        "experience": 88,
        "match_impact": 90,
        "consistency": 89
      },
      "achievements": ["Six World Cup Appearances", "Over 8,000 Test Runs"],
      "age": 67, // Born 1957
      "height": 172,
      "matches": { "tests": 124, "odis": 233, "t20is": 0 }
    }
  },
  {
    "name": "Hashim Amla",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "South Africa",
      "teams": ["South Africa", "Kings XI Punjab"],
      "stats": {
        "batting": 91,
        "bowling": 50,
        "fielding": 85,
        "experience": 85,
        "match_impact": 89,
        "consistency": 91
      },
      "achievements": ["Fastest to 2,000-7,000 ODI Runs", "Over 9,000 ODI Runs"],
      "age": 41, // Born 1983
      "height": 175,
      "matches": { "tests": 124, "odis": 181, "t20is": 44 }
    }
  },
  {
    "name": "Michael Holding",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 60,
        "bowling": 93,
        "fielding": 80,
        "experience": 88,
        "match_impact": 91,
        "consistency": 89
      },
      "achievements": ["Over 200 Test Wickets", "Key Part of 1970s-80s Pace Attack"],
      "age": 71, // Born 1954
      "height": 192,
      "matches": { "tests": 60, "odis": 102, "t20is": 0 }
    }
  },
  {
    "name": "Brendon McCullum",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "none",
      "nationality": "New Zealand",
      "teams": ["New Zealand", "Kolkata Knight Riders"],
      "stats": {
        "batting": 90,
        "bowling": 0,
        "fielding": 90,
        "experience": 85,
        "match_impact": 91,
        "consistency": 87
      },
      "achievements": ["Fastest Test Century (54 balls)", "Over 6,000 Test Runs"],
      "age": 43, // Born 1981
      "height": 171,
      "matches": { "tests": 101, "odis": 260, "t20is": 71 }
    }
  },
  {
    "name": "Malcolm Marshall",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 70,
        "bowling": 95,
        "fielding": 80,
        "experience": 88,
        "match_impact": 93,
        "consistency": 91
      },
      "achievements": ["Over 376 Test Wickets", "Best Test Bowling Average Among 300+ Wicket Takers"],
      "age": 66, // Born 1958, deceased
      "height": 180,
      "matches": { "tests": 81, "odis": 136, "t20is": 0 }
    }
  },
  {
    "name": "Sourav Ganguly",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "India",
      "teams": ["India", "Kolkata Knight Riders"],
      "stats": {
        "batting": 88,
        "bowling": 60,
        "fielding": 80,
        "experience": 88,
        "match_impact": 90,
        "consistency": 87
      },
      "achievements": ["Over 11,000 ODI Runs", "Led India to 2003 World Cup Final"],
      "age": 52, // Born 1972
      "height": 180,
      "matches": { "tests": 113, "odis": 311, "t20is": 0 }
    }
  },
  {
    "name": "Andy Roberts",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 60,
        "bowling": 93,
        "fielding": 75,
        "experience": 88,
        "match_impact": 91,
        "consistency": 89
      },
      "achievements": ["Over 200 Test Wickets", "Pioneer of West Indies Pace Era"],
      "age": 74, // Born 1951
      "height": 185,
      "matches": { "tests": 47, "odis": 56, "t20is": 0 }
    }
  },
  {
    "name": "Yuvraj Singh",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "left-hand-bat",
      "bowling_style": "left-arm-orthodox",
      "nationality": "India",
      "teams": ["India", "Kings XI Punjab"],
      "stats": {
        "batting": 85,
        "bowling": 80,
        "fielding": 90,
        "experience": 85,
        "match_impact": 91,
        "consistency": 85
      },
      "achievements": ["Six Sixes in an Over (T20)", "2011 World Cup Winner"],
      "age": 43, // Born 1981
      "height": 188,
      "matches": { "tests": 40, "odis": 304, "t20is": 58 }
    }
  },
  {
    "name": "Dennis Lillee",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "Australia",
      "teams": ["Australia"],
      "stats": {
        "batting": 60,
        "bowling": 94,
        "fielding": 75,
        "experience": 88,
        "match_impact": 92,
        "consistency": 90
      },
      "achievements": ["Over 350 Test Wickets", "Key Figure in 1970s Aussie Pace"],
      "age": 75, // Born 1949
      "height": 182,
      "matches": { "tests": 70, "odis": 63, "t20is": 0 }
    }
  },
  {
    "name": "Aravinda de Silva",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "Sri Lanka",
      "teams": ["Sri Lanka"],
      "stats": {
        "batting": 90,
        "bowling": 60,
        "fielding": 80,
        "experience": 88,
        "match_impact": 91,
        "consistency": 87
      },
      "achievements": ["1996 World Cup Final MOTM", "Over 6,000 Test Runs"],
      "age": 59, // Born 1965
      "height": 165,
      "matches": { "tests": 93, "odis": 308, "t20is": 0 }
    }
  },
  {
    "name": "Gordon Greenidge",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 80,
        "experience": 88,
        "match_impact": 89,
        "consistency": 90
      },
      "achievements": ["Two World Cup Wins (1975, 1979)", "Over 7,000 Test Runs"],
      "age": 73, // Born 1951
      "height": 178,
      "matches": { "tests": 108, "odis": 128, "t20is": 0 }
    }
  },
  {
    "name": "Inzamam-ul-Haq",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "none",
      "nationality": "Pakistan",
      "teams": ["Pakistan"],
      "stats": {
        "batting": 90,
        "bowling": 0,
        "fielding": 75,
        "experience": 88,
        "match_impact": 89,
        "consistency": 90
      },
      "achievements": ["Over 11,000 ODI Runs", "1992 World Cup Semi-Final Hero"],
      "age": 55, // Born 1970
      "height": 191,
      "matches": { "tests": 120, "odis": 378, "t20is": 1 }
    }
  },
  {
    "name": "Greg Chappell",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "Australia",
      "teams": ["Australia"],
      "stats": {
        "batting": 90,
        "bowling": 60,
        "fielding": 85,
        "experience": 88,
        "match_impact": 89,
        "consistency": 91
      },
      "achievements": ["Over 7,000 Test Runs", "24 Test Centuries"],
      "age": 76, // Born 1948
      "height": 183,
      "matches": { "tests": 87, "odis": 74, "t20is": 0 }
    }
  },
  {
    "name": "Joel Garner",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "West Indies",
      "teams": ["West Indies"],
      "stats": {
        "batting": 60,
        "bowling": 93,
        "fielding": 80,
        "experience": 88,
        "match_impact": 91,
        "consistency": 90
      },
      "achievements": ["Best ODI Bowling Average (18.84)", "Two World Cup Wins (1975, 1979)"],
      "age": 72, // Born 1952
      "height": 203,
      "matches": { "tests": 58, "odis": 98, "t20is": 0 }
    }
  },
  {
    "name": "VVS Laxman",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "India",
      "teams": ["India", "Deccan Chargers"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 85,
        "experience": 85,
        "match_impact": 90,
        "consistency": 88
      },
      "achievements": ["281* vs Australia (2001)", "Over 8,000 Test Runs"],
      "age": 50, // Born 1974
      "height": 185,
      "matches": { "tests": 134, "odis": 86, "t20is": 0 }
    }
  },
  {
    "name": "Len Hutton",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "England",
      "teams": ["England"],
      "stats": {
        "batting": 92,
        "bowling": 50,
        "fielding": 80,
        "experience": 90,
        "match_impact": 89,
        "consistency": 91
      },
      "achievements": ["Highest Test Score at the Time (364)", "Over 6,000 Test Runs"],
      "age": 108, // Born 1916, deceased
      "height": 178,
      "matches": { "tests": 79, "odis": 0, "t20is": 0 }
    }
  },
  {
    "name": "Mahela Jayawardene",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "Sri Lanka",
      "teams": ["Sri Lanka", "Kings XI Punjab"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 85,
        "experience": 88,
        "match_impact": 89,
        "consistency": 90
      },
      "achievements": ["Highest Test Score by a Sri Lankan (374)", "2014 T20 World Cup Winner"],
      "age": 47, // Born 1977
      "height": 173,
      "matches": { "tests": 149, "odis": 448, "t20is": 55 }
    }
  },
  {
    "name": "Babar Azam",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "Pakistan",
      "teams": ["Pakistan", "Karachi Kings"],
      "stats": {
        "batting": 92,
        "bowling": 50,
        "fielding": 85,
        "experience": 80,
        "match_impact": 90,
        "consistency": 91
      },
      "achievements": ["Fastest to 5,000 ODI Runs", "Top Ranked ODI Batsman"],
      "age": 30, // Born 1994
      "height": 180,
      "matches": { "tests": 52, "odis": 117, "t20is": 104 }
    }
  },
  {
    "name": "Jasprit Bumrah",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "India",
      "teams": ["India", "Mumbai Indians"],
      "stats": {
        "batting": 50,
        "bowling": 95,
        "fielding": 80,
        "experience": 80,
        "match_impact": 93,
        "consistency": 92
      },
      "achievements": ["Fastest Indian to 100 Test Wickets", "2024 T20 World Cup Winner"],
      "age": 31, // Born 1993
      "height": 178,
      "matches": { "tests": 36, "odis": 89, "t20is": 70 }
    }
  },
  {
    "name": "David Warner",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "Australia",
      "teams": ["Australia", "Sunrisers Hyderabad"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 90,
        "experience": 85,
        "match_impact": 91,
        "consistency": 88
      },
      "achievements": ["Two World Cup Wins (2015, 2021)", "Over 8,000 T20 Runs"],
      "age": 38, // Born 1986
      "height": 170,
      "matches": { "tests": 112, "odis": 161, "t20is": 99 }
    }
  },
  {
    "name": "Rohit Sharma",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "India",
      "teams": ["India", "Mumbai Indians"],
      "stats": {
        "batting": 92,
        "bowling": 50,
        "fielding": 85,
        "experience": 85,
        "match_impact": 92,
        "consistency": 89
      },
      "achievements": ["Highest ODI Score (264)", "2024 T20 World Cup Winner"],
      "age": 37, // Born 1987
      "height": 174,
      "matches": { "tests": 59, "odis": 262, "t20is": 159 }
    }
  },
  {
    "name": "Trent Boult",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "left-arm-fast-medium",
      "nationality": "New Zealand",
      "teams": ["New Zealand", "Mumbai Indians"],
      "stats": {
        "batting": 60,
        "bowling": 93,
        "fielding": 80,
        "experience": 85,
        "match_impact": 91,
        "consistency": 90
      },
      "achievements": ["2021 WTC Winner", "Over 300 ODI Wickets"],
      "age": 35, // Born 1989
      "height": 180,
      "matches": { "tests": 78, "odis": 114, "t20is": 55 }
    }
  },
  {
    "name": "Jos Buttler",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "none",
      "nationality": "England",
      "teams": ["England", "Rajasthan Royals"],
      "stats": {
        "batting": 90,
        "bowling": 0,
        "fielding": 95,
        "experience": 85,
        "match_impact": 91,
        "consistency": 88
      },
      "achievements": ["2019 World Cup Winner", "2022 T20 World Cup Winner"],
      "age": 34, // Born 1990
      "height": 180,
      "matches": { "tests": 57, "odis": 181, "t20is": 114 }
    }
  },
  {
    "name": "Quinton de Kock",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "none",
      "nationality": "South Africa",
      "teams": ["South Africa", "Mumbai Indians"],
      "stats": {
        "batting": 90,
        "bowling": 0,
        "fielding": 90,
        "experience": 85,
        "match_impact": 90,
        "consistency": 89
      },
      "achievements": ["Fastest to 1,000 T20I Runs by a Wicketkeeper", "Over 6,000 ODI Runs"],
      "age": 32, // Born 1992
      "height": 170,
      "matches": { "tests": 54, "odis": 155, "t20is": 80 }
    }
  },
  {
    "name": "Pat Cummins",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "Australia",
      "teams": ["Australia", "Kolkata Knight Riders"],
      "stats": {
        "batting": 70,
        "bowling": 94,
        "fielding": 80,
        "experience": 85,
        "match_impact": 92,
        "consistency": 91
      },
      "achievements": ["2023 World Cup Winner", "2021 T20 World Cup Winner"],
      "age": 31, // Born 1993
      "height": 192,
      "matches": { "tests": 62, "odis": 88, "t20is": 52 }
    }
  },
  {
    "name": "Shakib Al Hasan",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "left-hand-bat",
      "bowling_style": "left-arm-orthodox",
      "nationality": "Bangladesh",
      "teams": ["Bangladesh", "Kolkata Knight Riders"],
      "stats": {
        "batting": 85,
        "bowling": 90,
        "fielding": 85,
        "experience": 85,
        "match_impact": 91,
        "consistency": 89
      },
      "achievements": ["Most Wickets by a Bangladeshi (700+)", "Top All-Rounder Ranking"],
      "age": 38, // Born 1987
      "height": 175,
      "matches": { "tests": 67, "odis": 247, "t20is": 117 }
    }
  },
  {
    "name": "Rashid Khan",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "Afghanistan",
      "teams": ["Afghanistan", "Sunrisers Hyderabad"],
      "stats": {
        "batting": 70,
        "bowling": 95,
        "fielding": 85,
        "experience": 80,
        "match_impact": 93,
        "consistency": 91
      },
      "achievements": ["Fastest to 100 T20I Wickets", "Top T20I Bowler Ranking"],
      "age": 26, // Born 1998
      "height": 168,
      "matches": { "tests": 5, "odis": 103, "t20is": 82 }
    }
  },
  {
    "name": "Suryakumar Yadav",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "India",
      "teams": ["India", "Mumbai Indians"],
      "stats": {
        "batting": 92,
        "bowling": 50,
        "fielding": 90,
        "experience": 75,
        "match_impact": 93,
        "consistency": 90
      },
      "achievements": ["Top T20I Batsman Ranking", "2024 T20 World Cup Winner"],
      "age": 34, // Born 1990
      "height": 180,
      "matches": { "tests": 1, "odis": 37, "t20is": 60 }
    }
  },
  {
    "name": "KL Rahul",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "India",
      "teams": ["India", "Lucknow Super Giants"],
      "stats": {
        "batting": 88,
        "bowling": 50,
        "fielding": 85,
        "experience": 80,
        "match_impact": 87,
        "consistency": 85
      },
      "achievements": ["Fastest T20I Fifty by an Indian (14 balls)", "Over 2,000 T20I Runs"],
      "age": 32, // Born 1992
      "height": 180,
      "matches": { "tests": 50, "odis": 75, "t20is": 72 }
    }
  },
  {
    "name": "Rishabh Pant",
    "attributes": {
      "role": "Wicketkeeper-Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "none",
      "nationality": "India",
      "teams": ["India", "Delhi Capitals"],
      "stats": {
        "batting": 90,
        "bowling": 0,
        "fielding": 92,
        "experience": 75,
        "match_impact": 91,
        "consistency": 85
      },
      "achievements": ["Match-winning 89* in Brisbane (2021)", "Fastest Test Fifty by an Indian (28 balls)"],
      "age": 27, // Born 1997
      "height": 170,
      "matches": { "tests": 34, "odis": 30, "t20is": 66 }
    }
  },
  {
    "name": "Shreyas Iyer",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "India",
      "teams": ["India", "Kolkata Knight Riders"],
      "stats": {
        "batting": 87,
        "bowling": 50,
        "fielding": 85,
        "experience": 75,
        "match_impact": 88,
        "consistency": 86
      },
      "achievements": ["Debut Test Century (2021)", "Over 2,000 ODI Runs"],
      "age": 30, // Born 1994
      "height": 178,
      "matches": { "tests": 14, "odis": 51, "t20is": 51 }
    }
  },
  {
    "name": "Mohammed Siraj",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-fast",
      "nationality": "India",
      "teams": ["India", "Royal Challengers Bangalore"],
      "stats": {
        "batting": 50,
        "bowling": 92,
        "fielding": 80,
        "experience": 75,
        "match_impact": 90,
        "consistency": 88
      },
      "achievements": ["5-for in Brisbane Test (2021)", "Top-ranked ODI Bowler (2023)"],
      "age": 31, // Born 1994
      "height": 178,
      "matches": { "tests": 27, "odis": 41, "t20is": 10 }
    }
  },
  {
    "name": "Ishan Kishan",
    "attributes": {
      "role": "Wicketkeeper-Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "none",
      "nationality": "India",
      "teams": ["India", "Mumbai Indians"],
      "stats": {
        "batting": 88,
        "bowling": 0,
        "fielding": 90,
        "experience": 70,
        "match_impact": 89,
        "consistency": 84
      },
      "achievements": ["Fastest ODI Double Century (2022)", "Over 1,000 T20I Runs"],
      "age": 26, // Born 1998
      "height": 168,
      "matches": { "tests": 2, "odis": 25, "t20is": 32 }
    }
  },
  {
    "name": "Shardul Thakur",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "India",
      "teams": ["India", "Chennai Super Kings"],
      "stats": {
        "batting": 75,
        "bowling": 85,
        "fielding": 80,
        "experience": 75,
        "match_impact": 87,
        "consistency": 82
      },
      "achievements": ["4 Wickets in an Innings at The Oval (2021)", "Over 50 Test Wickets"],
      "age": 33, // Born 1991
      "height": 175,
      "matches": { "tests": 11, "odis": 47, "t20is": 25 }
    }
  },
  {
    "name": "Deepak Chahar",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-medium",
      "nationality": "India",
      "teams": ["India", "Chennai Super Kings"],
      "stats": {
        "batting": 60,
        "bowling": 88,
        "fielding": 80,
        "experience": 70,
        "match_impact": 87,
        "consistency": 85
      },
      "achievements": ["6/7 in T20Is (2019)", "Over 50 ODI Wickets"],
      "age": 32, // Born 1992
      "height": 180,
      "matches": { "tests": 0, "odis": 25, "t20is": 25 }
    }
  },
  {
    "name": "Yuzvendra Chahal",
    "attributes": {
      "role": "Bowler",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "India",
      "teams": ["India", "Rajasthan Royals"],
      "stats": {
        "batting": 50,
        "bowling": 90,
        "fielding": 75,
        "experience": 80,
        "match_impact": 89,
        "consistency": 87
      },
      "achievements": ["6/25 in T20Is (2017)", "Most Wickets in T20Is by an Indian"],
      "age": 34, // Born 1990
      "height": 168,
      "matches": { "tests": 0, "odis": 72, "t20is": 80 }
    }
  },
  {
    "name": "Shubman Gill",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "India",
      "teams": ["India", "Gujarat Titans"],
      "stats": {
        "batting": 90,
        "bowling": 50,
        "fielding": 85,
        "experience": 75,
        "match_impact": 89,
        "consistency": 88
      },
      "achievements": ["Double Century in ODIs (2023)", "U-19 World Cup Winner (2018)"],
      "age": 25, // Born 1999
      "height": 178,
      "matches": { "tests": 25, "odis": 44, "t20is": 19 }
    }
  },
  {
    "name": "Axar Patel",
    "attributes": {
      "role": "All-Rounder",
      "batting_style": "left-hand-bat",
      "bowling_style": "left-arm-orthodox",
      "nationality": "India",
      "teams": ["India", "Delhi Capitals"],
      "stats": {
        "batting": 80,
        "bowling": 88,
        "fielding": 85,
        "experience": 75,
        "match_impact": 88,
        "consistency": 86
      },
      "achievements": ["5/48 in Tests (2021)", "Over 50 T20I Wickets"],
      "age": 31, // Born 1994
      "height": 182,
      "matches": { "tests": 14, "odis": 57, "t20is": 52 }
    }
  },
  {
    "name": "Prithvi Shaw",
    "attributes": {
      "role": "Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "right-arm-offbreak",
      "nationality": "India",
      "teams": ["India", "Delhi Capitals"],
      "stats": {
        "batting": 87,
        "bowling": 50,
        "fielding": 80,
        "experience": 70,
        "match_impact": 85,
        "consistency": 82
      },
      "achievements": ["Youngest Test Debut Centurion for India (2018)", "U-19 World Cup Winner (2018)"],
      "age": 25, // Born 1999
      "height": 165,
      "matches": { "tests": 5, "odis": 6, "t20is": 0 }
    }
  },
  {
    "name": "Sanju Samson",
    "attributes": {
      "role": "Wicketkeeper-Batsman",
      "batting_style": "right-hand-bat",
      "bowling_style": "none",
      "nationality": "India",
      "teams": ["India", "Rajasthan Royals"],
      "stats": {
        "batting": 88,
        "bowling": 0,
        "fielding": 90,
        "experience": 70,
        "match_impact": 87,
        "consistency": 84
      },
      "achievements": ["Century in T20Is (2024)", "Over 1,000 T20I Runs"],
      "age": 30, // Born 1994
      "height": 170,
      "matches": { "tests": 0, "odis": 16, "t20is": 30 }
    }
  },
  {
    "name": "Arshdeep Singh",
    "attributes": {
      "role": "Bowler",
      "batting_style": "left-hand-bat",
      "bowling_style": "left-arm-fast-medium",
      "nationality": "India",
      "teams": ["India", "Punjab Kings"],
      "stats": {
        "batting": 50,
        "bowling": 90,
        "fielding": 80,
        "experience": 70,
        "match_impact": 89,
        "consistency": 87
      },
      "achievements": ["Key Role in 2024 T20 World Cup Win", "Over 50 T20I Wickets"],
      "age": 26, // Born 1999
      "height": 183,
      "matches": { "tests": 0, "odis": 6, "t20is": 44 }
    }
  },
  {
    "name": "Yashasvi Jaiswal",
    "attributes": {
      "role": "Batsman",
      "batting_style": "left-hand-bat",
      "bowling_style": "right-arm-legbreak",
      "nationality": "India",
      "teams": ["India", "Rajasthan Royals"],
      "stats": {
        "batting": 91,
        "bowling": 50,
        "fielding": 85,
        "experience": 70,
        "match_impact": 90,
        "consistency": 89
      },
      "achievements": ["Double Century in Tests (2024)", "U-19 World Cup Top Scorer (2020)"],
      "age": 23, // Born 2001
      "height": 168,
      "matches": { "tests": 11, "odis": 0, "t20is": 17 }
    }
  },
  {
    "name": "Kuldeep Yadav",
    "attributes": {
      "role": "Bowler",
      "batting_style": "left-hand-bat",
      "bowling_style": "left-arm-chinaman",
      "nationality": "India",
      "teams": ["India", "Delhi Capitals"],
      "stats": {
        "batting": 50,
        "bowling": 92,
        "fielding": 75,
        "experience": 75,
        "match_impact": 90,
        "consistency": 88
      },
      "achievements": ["5/17 in T20Is (2023)", "Hat-trick in ODIs (2019)"],
      "age": 30, // Born 1994
      "height": 168,
      "matches": { "tests": 12, "odis": 103, "t20is": 35 }
    }
  }
];