import React from 'react';
import PropTypes from 'prop-types';
import 'assets/sass/styles.sass';
import RepositoryCardChip from 'components/repository/RepositoryCardChip';

export default function RepositoryCard(props) {
    const {
        repositoryName,
        repositoryDescription,
        repositoryIssues,
        repositoryStars,
        repositoryAvatar,
        repositoryUserName,
        createdAt
    } = props;
    return (
        <div className="grid-container">
            <div className="photo-grid-container">
                <img className="repository-avatar" src={repositoryAvatar} alt="Avatar" />
            </div>
            <div className="repository-info">
                <div className="title-grid-container">
                    <h1>{repositoryName}</h1>
                </div>
                <div className="definition-grid-container">
                    <p>{repositoryDescription}</p>
                </div>
                <div className="details-grid-container">
                    <RepositoryCardChip
                        classProp={'starts-chip'}
                        quantity={repositoryStars}
                        text={'Stars: '}
                    />
                    <RepositoryCardChip
                        classProp={'issues-chip'}
                        quantity={repositoryIssues}
                        text={'Issues: '}
                    />
                    <div>
                        Submited {createdAt} days ago by {repositoryUserName}
                    </div>
                    {/* <div>
              {'9'} days ago by {'repositoryUserName'}
            </div> */}
                </div>
            </div>
        </div>
    );
}

RepositoryCard.propTypes = {
    repositoryName: PropTypes.string,
    repositoryDescription: PropTypes.string,
    repositoryIssues: PropTypes.number,
    repositoryStars: PropTypes.number,
    repositoryAvatar: PropTypes.string,
    repositoryUserName: PropTypes.string,
    createdAt: PropTypes.number
};
