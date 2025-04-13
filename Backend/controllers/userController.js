import pool from "../config/db.js";
import { inputSanitizer, emailValidator } from "../utils/utils.js";

export const userCreate = async (req, res) => {
	// CREATE
	try {
		const sanifiedEmail = emailValidator(req.body.email);
		const sanifiedName = inputSanitizer(req.body.name);
		const sanifiedPassword = inputSanitizer(req.body.password);
		if(sanifiedEmail === false) return res.status(400).json({ error: 'Invalid email format' });
		if(sanifiedName === false) return res.status(400).json({ error: 'Invalid name format' });
		if(sanifiedPassword === false) return res.status(400).json({ error: 'Invalid password format' });

    const result = await pool.query('INSERT INTO users (email, password, name) VALUES ($1, $2, $3);', [sanifiedEmail, sanifiedPassword, sanifiedName]);
		console.log(result)
    res.status(200).json({ message: 'Created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const userRead = async (req, res) => {
	// READ
	try {
    const result = await pool.query('SELECT * FROM users;');
    res.json({ users: result.rows, type: "Read" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const userUpdate = async (req, res) => {
	// UPDATE
	try {
    const result = await pool.query('SELECT NOW()');
    res.json({ serverTime: result.rows[0], type: "Update" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const userDelete = async (req, res) => {
	// DELETE
	try {
    const result = await pool.query('SELECT NOW()');
    res.json({ serverTime: result.rows[0], type: "Delete" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};