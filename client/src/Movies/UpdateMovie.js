import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import Paper from '@material-ui/core/Paper';
import { updateStyles } from '../material-ui-styles/UpdateMovieStyles';



const UpdateMovie = ({data, errors, touched, values, handleSubmit, status, props}) => {
    // hook for keeping track of movie 
    const [movie, setMovie] = useState(data.location.state);

    console.log(movie)
    // console.log("passed in props object from App.js", data)
    
    // updates movie if change has occured 
    useEffect(() => {
        
        if (status) {
            setMovie(movieEdit => ({...movie, movieEdit}))
        }

    }, [status])
    
    const handleChange = (event) => {
        event.persist();
        setMovie({
            ...movie,
            [event.target.name]: event.target.value,
        })
    };

    const style = updateStyles();
    
    return (
        <div className="form-container">
            <Paper className={style.background}>
                <h1>Update Movie</h1>

                <Form className={style.container}>
                    
                    {/* title */}
                    <Field 
                        type="text" 
                        name="title" 
                        placeholder="Title"
                        className={style.textField}
                        value={movie.title}
                        onChange={handleChange}
                    />
                    {touched.title && errors.title && ( <p className={style.error}>{errors.title}</p> )}

                    {/* director */}
                    <Field 
                        type="text" 
                        name="director" 
                        placeholder="Director" 
                        className={style.textField}
                        value={movie.director}
                        onChange={handleChange}
                    />
                    {touched.director && errors.director && ( <p className={style.error}>{errors.director}</p> )}

                    {/* metascore */}
                    <Field 
                        type="text" 
                        name="metascore" 
                        placeholder="Metascore" 
                        className={style.textField}
                        value={movie.metascore}
                        onChange={handleChange}
                    />
                    {touched.metascore && errors.metascore && <p className={style.error}>{errors.metascore}</p>}

                    {/* stars */}
                    <Field 
                        type="text" 
                        name="stars" 
                        placeholder="Stars"
                        className={style.textField}
                        defaultValue={movie.stars}
                        onChange={handleChange}
                    />
                    {touched.stars && errors.stars && ( <p className={style.error}>{errors.stars}</p> )}

                    <button type="submit" className={style.button}>Update</button>
                </Form>
            </Paper>
        </div>
    );
};

// using formik 
const FormikUpdateMovie = withFormik({
    
    // making sure each prop has a default value if given value is undefined 
    mapPropsToValues({ title, director, metascore, stars, id }) {
      return {
        title: title || "",
        director: director || "",
        metascore: metascore || "",
        stars: stars || "", 
        id: id || "",
      };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        title: Yup
        .string()
        .required("Enter Title"),
        director: Yup
        .string()
        .required("Enter Director Name"),
        metascore: Yup
        .string()
        .required("Enter Metascore"),
        stars: Yup 
        .string()
        .required("Enter At Least 1 Star"),
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props, setStatus }) {

        console.log("values, props", values, props)
        resetForm(); 
    },

})(UpdateMovie); // currying functions

export default FormikUpdateMovie