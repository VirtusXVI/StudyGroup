import pool from "../config/db.js";
import { nameValidator, emailValidator, passwordValidator } from "../utils/utils.js";

export const userCreate = async (req, res) => {
	// CREATE
	try {
		const validatedEmail = emailValidator(req.body.email);
		const validatedName = nameValidator(req.body.name);
		const validatedPassword = passwordValidator(req.body.password);
		if(validatedEmail === false) return res.status(400).json({ error: 'Invalid email format' });
		if(validatedName === false) return res.status(400).json({ error: 'Invalid name format' });
		if(validatedPassword === false) return res.status(400).json({ error: 'Invalid password format' });


    const result = await pool.query('INSERT INTO users (email, password, name) VALUES ($1, $2, $3);', [validatedEmail, validatedPassword, validatedName]);
		console.log(result)
    res.status(200).json({ message: 'Created' });
  } catch (error) {
    error = new Error("Something went wrong inside userCreate");
    throw error;
  }
};

export const userRead = async (req, res) => {
	// READ
	try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1;', [req.body.id]);
    res.status(200).json({ users: result.rows, type: "Read" });
  } catch (error) {
    throw new Error('Something went wrong inside userRead');
  }
};

export const userUpdate = async (req, res) => {
	// UPDATE
	try {
    const oldValues = await pool.query('SELECT * FROM users WHERE id = $1;', [req.body.id])
    console.log(oldValues.rows[0].email, req.body.email)
    const validatedEmail = req.body.email === undefined ? oldValues.rows[0].email : emailValidator(req.body.email);
		const validatedName = req.body.name === undefined ? oldValues.rows[0].name : nameValidator(req.body.name);
    const validatedPassword = req.body.password === undefined ? oldValues.rows[0].password : passwordValidator(req.body.password);
		if(validatedEmail === false) return res.status(400).json({ error: 'Invalid email format' });
		if(validatedName === false) return res.status(400).json({ error: 'Invalid name format' });
    if(validatedPassword === false) return res.status(400).json({ error: 'Invalid password format' });


    const result = await pool.query('UPDATE users SET email = $1, password = $2, name = $3 WHERE id = $4; ', [validatedEmail, validatedPassword, validatedName, req.body.id]);
    res.json({ serverTime: result.rows[0], type: "Update" });
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong inside userUpdate');
  }
};

export const userDelete = async (req, res) => {
	// DELETE
	try {
    const id = req.url.replace("/delete/", "");
    const result = await pool.query('DELETE FROM users WHERE id = $1;', [id]);
    res.json({ serverTime: result.rows[0], type: "Delete" });
  } catch (error) {
    throw new Error('Something went wrong inside userDelete');
  }
};