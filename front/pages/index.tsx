import Modal from './components/Modal'
import {useState} from 'react'
import Tickets from './components/TicketsList'
import Layaout from './components/Layaout'


const fetchTickets = () => {
    return fetch(`http://localhost:3001/tickets`)
        .then(res => res.json())
        .catch(error => {
            message:"Not found"
        })
}


export default function Home(props) {
    const [statusModal, setStatusModal] = useState(props.modal);
    const [listSubscriptions, setListSubscriptions] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);

    const [typePlan, setTypePlan] = useState('Mensual')

    const handleClick = async () => {
        const titleInput = document.getElementById('title').value;
        if (titleInput) {


        }

        console.log('titleInput', titleInput);

    };
    const handleChangeCP = () => setStatusModal(true);

    const syncTickets = (typePlan) => {

    }
    return (
        <>
            <Layaout>
                <Modal
                    stateModal={statusModal}
                    setState={setStatusModal}
                >
                    <p><strong>Dar de alta una entrada</strong></p>
                    <p>Ingresa los datos para registrar una entrada</p>
                    <input type="text" name="title" id="title" placeholder='Escribe el titulo'/>
                    <input type="text" name="author" id="author" placeholder='Escribe el autor'/>
                    <input type="date" name="date" id="date"/>
                    <input type="text" name="content" id="content" placeholder='Escribe el contenido'/>
                    <button id='check' onClick={handleClick}>Guardar</button>
                    {errorMessage &&
                        <div className='error-cp'>
                            <p>No hay servicio en tu zona.</p>
                        </div>
                    }

                </Modal>
                {!statusModal &&
                    <div className='banner-text'>
                        <p>hola</p>

                    </div>
                }
                {!statusModal &&
                    <div className='options'>
                        <h4>Lista de entradas</h4>

                        <button onClick={() => syncTickets('Anual')}>Actualizar lista</button>
                    </div>
                }
                {(!errorMessage && !statusModal) &&
                    <Tickets
                        data={listSubscriptions}
                        typeSubscription={typePlan}
                    />
                }
            </Layaout>
        </>
    )
}


Home.getInitialProps = () => {

    return {modal: true};
};