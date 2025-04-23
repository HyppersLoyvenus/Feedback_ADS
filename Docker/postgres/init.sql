CREATE TABLE IF NOT EXISTS feedback_aluno (
    id SERIAL PRIMARY KEY,
    aluno VARCHAR(255),
    satisfacao INTEGER
);