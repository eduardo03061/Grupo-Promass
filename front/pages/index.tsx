import Modal from './components/Modal'
import {useEffect, useState} from 'react'
import Tickets from './components/TicketsList'
import Layaout from './components/Layaout'


export default function Home() {
    const [statusModal, setStatusModal] = useState(false);
    const [listTickets, setListTickets] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    const [q, setQ] = useState("")

    useEffect(() => {
        fetchTickets()
    }, [])

    const fetchTickets = async () => {
        try {
            const resp = await fetch('http://localhost:3000/tickets')

            setListTickets(await resp.json())
            setErrorMessage(false);
        } catch (e) {
            setErrorMessage(true);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const titleInput = document.getElementById('title').value;
        const authorInput = document.getElementById('author').value;
        const dateInput = document.getElementById('date').value;
        const contentInput = document.getElementById('content').value;


        if (titleInput && authorInput && dateInput && contentInput) {
            let data = {
                title: titleInput,
                author: authorInput,
                date: dateInput,
                content: contentInput
            }
            fetch('http://localhost:3000/tickets', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
                .then(response => response.json())
                .then(json => {
                    setStatusModal(false);
                    fetchTickets();
                })
                .catch(err => console.log(err));

        }

        return false
    };
    const handleAddTicket = () => setStatusModal(true);


    const searchTicket = async (data) => {

        console.log('data',data)

        const resp = await fetch(`http://localhost:3000/tickets?query=${data}`)

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

                    <div className='form-ticket'>
                        <form onSubmit={handleSubmit}>
                            <div className='input'>
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" id="title" placeholder='Escribe el titulo' required/>
                            </div>

                            <div className='input'>
                                <label htmlFor="author">Autor</label>
                                <input type="text" name="author" id="author" placeholder='Escribe el autor' required/>
                            </div>

                            <div className='input'>
                                <label htmlFor="date">Fecha</label>
                                <input type="date" name="date" id="date"/>
                            </div>

                            <div className='input'>
                                <label htmlFor="content">Contenido</label>
                                <input type="text" name="content" id="content" placeholder='Escribe el contenido'
                                       required/>
                            </div>
                            {errorMessage &&
                                <div className='error-msg'>
                                    <br/>
                                    <p>Error en el servidor</p>
                                </div>
                            }
                            <button type="submit" id='check'>Guardar</button>

                        </form>

                    </div>


                </Modal>

                {!statusModal &&
                    <div className='options'>
                        <h4>Lista de entradas</h4>

                        <div className='search'>
                            <label htmlFor="search">Buscar</label>
                            <input type="search" name='search' id='search' onChange={(e) => searchTicket(e.target.value)} />
                        </div>

                        <button onClick={() => handleAddTicket()}>Agregar entrada</button>

                    </div>
                }

                <Tickets
                    data={listTickets}
                />

            </Layaout>
        </>
    )
}

