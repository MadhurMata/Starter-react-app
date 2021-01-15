import React from 'react';
import 'assets/sass/styles.sass';

export default function RepositoryCard() {
    return (
        <div className="grid-container">
            <div className="photo-grid-container">
                <image
                    src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Favatars-round-flat%2F33%2Favat-01-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F5072850%2Favatar_profile_user_icon&tbnid=HkuQ-cnk3feboM&vet=12ahUKEwifx9OlrJ7uAhVRgM4BHQOGDa0QMygBegUIARDhAQ..i&docid=h3a1LP4jX7CSyM&w=512&h=512&q=avatar%20profile&ved=2ahUKEwifx9OlrJ7uAhVRgM4BHQOGDa0QMygBegUIARDhAQ"
                    alt="Profile photo"
                />
            </div>
            <div className="repository-info">
                <div className="title-grid-container">
                    <h1>{'repositoryName'}</h1>
                </div>
                <div className="definition-grid-container">
                    <p>{'repositoryDescription'}</p>
                </div>
                <div className="details-grid-container">
                    {/* <Chip color={'#862892'} quantity={'4'} text={'Stars: '} />
            <Chip color={'#19bb19'} quantity={'56'} text={'Issues: '} /> */}
                    <div>
                        Submited {'9'} days ago by {'repositoryUserName'}
                    </div>
                    {/* <div>
              {'9'} days ago by {'repositoryUserName'}
            </div> */}
                </div>
            </div>
        </div>
    );
}
