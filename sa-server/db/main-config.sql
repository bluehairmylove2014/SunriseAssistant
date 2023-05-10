DROP TABLE IF EXISTS Dialogs;
DROP TABLE IF EXISTS DialogList;
DROP TABLE IF EXISTS Users;


CREATE TABLE Users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE DialogList (
  dialog_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES Users(user_id),
  created_at TIMESTAMP DEFAULT NOW(),
  dialog_name TEXT NOT NULL,
  dialog_avt TEXT NOT NULL,
  is_mark BOOLEAN NOT NULL
);
CREATE TABLE Dialogs (
  dialog_id SERIAL REFERENCES DialogList(dialog_id),
  sender TEXT NOT NULL,
  msg TEXT NOT NULL,
  send_at TIMESTAMP DEFAULT NOW()
);
