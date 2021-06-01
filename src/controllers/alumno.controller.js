import { pool } from '../database'

export const readAllAlumnos = async(req, res)=>{
    try {
        const response = await pool.query('select *from alumno');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const readAlumno = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from alumno where idalumno = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const delAlumno = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from alumno where idalumno = $1', [id]);
        return res.status(200).json(
            `Alumno ${ id } eliminado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const updateAlumno = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ correo, nombres, telefono} = req.body;
        await pool.query('update alumno set correo = $1, nombres = $2, telefono = $3 where idalumno = $4', [correo, nombres, telefono, id]);
        return res.status(200).json(
            `Alumno modificado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const createAlumno = async(req, res)=>{
    try {
        const{ correo, nombres, telefono} = req.body;
        await pool.query('insert into alumno(correo, nombres, telefono) values($1, $2, $3)', [correo, nombres, telefono]);
        return res.status(200).json(
            `El Alumno ${ nombres } se ha agregado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}