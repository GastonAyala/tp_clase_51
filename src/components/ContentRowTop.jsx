import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg'
import { ContentData } from './ContentData';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';

function ContentRowTop({ data }){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
						{
							data
							.map((el, i) => {
								return <ContentData key={i} title={el.title} color={el.color} digit={el.digit} icon={el.icon}/>
							})
						}
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastMovieInDb img={imagenFondo} />
						{/*<!-- End content row last movie in Data Base -->*/}

						<GenresInDb />
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )
}
export default ContentRowTop;