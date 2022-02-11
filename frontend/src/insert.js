import React , {useState , useEffect} from 'react'
import Header from './Header'
import Axios from "axios";
function Insert() {

    const [id, setid] = useState('');
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const [category, setcategory] = useState('');
    const [description, setdescription] = useState('');

    const submitReview = () => {
        Axios.post("http://localhost:3001/api/insert", {
            id: 14,
            title: title,
            author: author,
            category: category,
            description: description
        }).then(() => {
            alert('successfull insert');
        });
    }


        // const validate = (values) => {
        //     const errors = {};
        //     if (!values.title) {
        //         errors.title = "Title is required";
        //     }
        //     if (!values.author) {
        //         errors.author = "Author is required";
        //     }
        //     if (!values.description) {
        //         errors.description = "Description is required";
        //     }
        //     if (!values.id) {
        //         errors.id = "Id is required";
        //     }
        //     if (!values.category) {
        //         errors.category = "Category is required";
        //     }
        //     return errors;
        // };


        return (
            <>
                <Header />
                <center>
                <form >
                    <h1>Insert a Book</h1>
                    <div className="field">
                    </div>
                        <div className="field">
                        <br/>
                        <label>Title</label>
                        <br />
                        <input type="text" name="Title" placeholder="Title"
                            onChange={e => { settitle(e.target.value); }}
                        />
                    </div>
                        <div className="field">
                        <br/>
                        <label>Author</label>
                        <br/>
                        <input type="text" name="Author" placeholder="Author"
                            onChange={e => { setauthor(e.target.value); }}
                        />
                    </div>
                        <div className="field">
                        <br/>
                        <label>Category</label>
                        <br/>
                        <input type="text" name="year" placeholder="Category"
                            onChange={e => { setcategory(e.target.value); }}
                        />
                    </div>
                        <div className="field">
                        <br/>
                        <label>Description</label>
                        <br/>
                        <input type="text" name="description" placeholder="Description"
                            onChange={e => { setdescription(e.target.value); }}
                        />
                        <br/><br/>
                    </div>
                    <button onClick={submitReview}>
                        Submit
                    </button>
                    </form>
                </center>
                
                </>
                
        );

}
export default Insert;