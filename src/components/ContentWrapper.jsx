import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import TableHead from './TableHead';
import TableRow from './TableRow'
function ContentWrapper(){
    const metrics = [
		{
			title: "Movies in Data Base",
			color: "primary",
			digit: 21,
			icon: "film"
		},
		{
			title: "Total awards",
			color: "success",
			digit: 79,
			icon: "award"
		},
		{
			title: "Actors quantity",
			color: "warning",
			digit: 49,
			icon: "user"
		},
	];

	const movies = [
		{
			title: 'Billy Elliot',
			length: '123',
			rating: 5,
			genre: ['Drama', 'Comedia'],
			awards: 2
		},
		{
			title: 'Alicia en el país de las maravillas',
			length: '142',
			rating: 4.8,
			genre: ['Drama','Acción', 'Comedia'],
			awards: 3
		}
	];

	const tableHeadData = ['Titulo', 'Duración', 'Rating', 'Género', 'Premios'];

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />

                    <ContentRowTop data={metrics}/>
					<div className='border m-4 p-3'>
						<table className='table table-bordered'>
							<TableHead items={tableHeadData} />
							<tbody>
								{movies.map((movie, i) => {
									return <TableRow key={i} {...movie} />
								})}
							</tbody>
							<TableHead items={tableHeadData} />
						</table>
					</div>
					
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;