# Math Multiplication Game 🧠✖️

An interactive multiplication game built with JavaScript that challenges players with timed math questions based on difficulty level. Player performance is tracked, and the best score is saved locally.

---

## 🚀 Features

- Select difficulty level:
  - *Easy*
  - *Medium*
  - *Hard*
- Each level generates *10 multiplication questions*
- Timer for each question
- Displays:
  - Total time
  - Average time per question
- Saves and displays:
  - *Best time*
  - *Best player name*
- Data persistence using *Local Storage*
- Simple and clean UI

---

## 🕹️ How It Works

1. On the first screen, the player enters their *name*.
2. The player selects a difficulty level:
   - Easy
   - Medium
   - Hard
3. The game starts and displays *10 multiplication questions* based on the selected level.
4. A timer runs while the player answers each question.
5. After completing all questions:
   - Total time is shown
   - Average time per question is calculated
6. If the player's result is better than the previous best:
   - The best time and player name are saved in *Local Storage*
7. The best score is displayed on the screen.

---

## 🎯 Difficulty Levels

| Level  | Number Range |
|------|--------------|
| Easy | Small numbers |
| Medium | Medium range numbers |
| Hard | Larger numbers |

(Exact ranges can be adjusted in the code)

---

## 💾 Local Storage Usage

The following data is stored in localStorage:
- Best player name
- Best completion time

This ensures the best score remains even after refreshing the page.

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript (Vanilla JS)
- Local Storage API
- Responsive Design

---

## 📷 Preview
!(Screenshot1.png)
!(Screenshot2.png)

---

## 📌 Future Improvements

- Add sound effects
- Add leaderboard
- Dark mode
- More question types (division, addition, subtraction)

---

## 👤 Author

Developed by Raziyeh
