import React, { useEffect, useRef, useState } from "react"
import Select from 'react-select'
import { SButton, TButton } from "../../../Components/Button/button"
import { Input } from "../../../Components/Input/input"
import { Fetch } from "../../../modules/fetch";
import { IData } from "../Dashboard";
import { GroupBtn, GroupSelect, IconCancel, IconClose, IconConfirm, IconPay, IconReceive, IconTrash, IconWallet, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalRow, ModalShadow } from "./style"

interface StyledModalNewProps {
    onClick: () => void;
}
interface StyledModalEditProps {
    onClick: () => void;
    id: number;
    list: Array<IData>;
    chosenUpdate: IData;
}

interface INewTransaction {
    "user_id": string;
    "type": string;
    "date": string;
    "cost": string;
    "payment": string;
    "origin": string;
    "description": string;
    "adress": string;
}

interface IAlterTransaction {
    "transaction_id": string;
    "date": string;
    "cost": string;
    "payment": string;
    "origin": string;
    "description": string;
    "adress": string;
}

interface IDeleteTransaction {
    "transaction_id": string;
}

export const ModalNewPay: React.FC<StyledModalNewProps> = ({ onClick }) => {
    const [newPay, setNewPay] = useState<boolean>(true)
    const [newRec, setNewRec] = useState<boolean>(false)

    const [date, setDate] = useState<string>('')
    const [cost, setCost] = useState<string>('')
    const [origin, setOrigin] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [adress, setAdress] = useState<string>('')
    const [payment, setPayment] = useState<string>('')

    const paymentOptions = [
        { value: 'Dinheiro', label: 'Dinheiro' },
        { value: 'Cartão de crédito', label: 'Cartão de crédito' },
        { value: 'Cartão de débito', label: 'Cartão de débito' },
        { value: 'PIX', label: 'PIX' },
        { value: 'Outro', label: 'Outro' }
    ]

    const selectStyles = {
        option: (provided: any, state: any) => ({
            ...provided,
            color: state.isSelected ? 'white' : 'rgba(255,255,255,0.5)',
            padding: 20,
            background: state.isSelected ? '#6D65D3' : '#1F212A',
            cursor: 'pointer'
        }),
        control: () => ({}),
        singleValue: (provided: any, state: any) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            const color = 'white';

            return { ...provided, opacity, transition, color };
        },
        indicatorsContainer: () => ({
            display: 'none'
        }),
        input: () => ({
            height: '0px',
            fontSize: '0px'
        }),
        valueContainer: () => ({
            background: '#1F212A',
            borderRadius: '10px',
            padding: '15px',
            cursor: 'pointer'
        }),
        menu: (provided: any) => ({
            ...provided,
            background: '#1F212A',
            borderRadius: '10px'
        }),
        menuList: (provided: any) => ({
            ...provided,
            background: '#1F212A',
            borderRadius: '10px'
        })
    }

    const handleChangeDate = (event: React.FormEvent<HTMLInputElement>) => {
        setDate(event.currentTarget.value)
    }

    const handleChangeCost = (event: React.FormEvent<HTMLInputElement>) => {
        setCost(event.currentTarget.value)
    }

    const handleChangeOrigin = (event: any) => {
        setOrigin(event.currentTarget.value)
    }

    const handleChangeDescription = (event: React.FormEvent<HTMLInputElement>) => {
        setDescription(event.currentTarget.value)
    }

    const handleChangeAdress = (event: React.FormEvent<HTMLInputElement>) => {
        setAdress(event.currentTarget.value)
    }

    const handleChangePayment = (event: any) => {
        setPayment(event.value)
    }

    function handleNewPay() {
        setNewRec(!newRec)
        setNewPay(!newPay)
    }

    const convertNumber = (value: string) =>{
        if(value.includes(',') && value.includes('.')){
            return parseFloat(
                value
                    .replaceAll('.', '')
                    .replaceAll(',', '.')
                    .replace(/[^0-9.-]+/g, '')
                );
        }
        if(value.includes(',')){
            return parseFloat(
                value
                    .replaceAll(',', '.')
                    .replace(/[^0-9.-]+/g, '')
                );
        } else {
            return parseFloat(
                value
                    .replace(/[^0-9.-]+/g, '')
                );
        }
        

    }

  const listInStorage = localStorage.getItem('paymentsList');


    async function handleNewTransaction() {
        // const fetchClass = new Fetch<INewTransaction>("Transaction/insert.php");
        let newArray = listInStorage && JSON.parse(listInStorage)
        const body = {
            "id": newArray.length ?? 0,
            "type": newPay ? "Gasto" : "Recebimento",
            "date": date ? date : new Date(),
            "cost": newPay ? convertNumber(cost)*-1 : convertNumber(cost),
            "payment": payment,
            "origin": origin,
            "description": description,
            "adress": adress
        }
        // const response = await fetchClass.post(body)
        // console.log(response.data)
        newArray.push(body)
        console.log(newArray)
        localStorage.setItem('paymentsList', JSON.stringify(newArray))
        onClick()
    }

    return (
        <Modal>
            <ModalShadow onClick={onClick} />
            <ModalContent>
                <ModalHeader>
                    <ModalRow>
                        <IconWallet />
                        <h1>Nova Transação</h1>
                    </ModalRow>
                    <ModalRow>
                        <GroupBtn>
                            {newPay ? <SButton text="Recebido" onClick={handleNewPay}><IconReceive /></SButton> : <SButton text="Pagar" onClick={handleNewPay}><IconPay /></SButton>}
                        </GroupBtn>
                    </ModalRow>
                    <IconClose onClick={onClick} />
                </ModalHeader>
                <ModalBody>
                    <Input onChange={handleChangeDate} type="date" placeholder="Data da transação" label="Data" />
                    <Input onChange={handleChangeCost} type="text" placeholder="R$ 99,99" label={newPay ? "Gasto" : "Recebido"} />
                    <GroupSelect>
                        <Input onChange={handleChangeOrigin} type="text" placeholder="Origem" label={"Origem"} />
                    </GroupSelect>
                    <Input onChange={handleChangeDescription} type="text" placeholder={newPay ? "Farmácia" : "Salário"} label="Tipo" />
                    <Input onChange={handleChangeAdress} type="text" placeholder="Endereço" label="Endereço" />
                    <GroupSelect>
                        <label>Forma de pagamento</label>
                        <Select placeholder="Selecione a forma de pagamento..." styles={selectStyles} onChange={handleChangePayment} options={paymentOptions} />
                    </GroupSelect>
                </ModalBody>
                <ModalFooter>
                    <GroupBtn>
                        <TButton text="Cancelar" onClick={onClick}><IconCancel /></TButton>
                        <SButton text="Confirmar" onClick={handleNewTransaction}><IconConfirm /></SButton>
                    </GroupBtn>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export const ModalAlterPay: React.FC<StyledModalEditProps> = ({ onClick, id, list, chosenUpdate }) => {
    const [itemId, setItemId] = useState<number>()
    const [date, setDate] = useState<string>('')
    const [cost, setCost] = useState<string>('')
    const [origin, setOrigin] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [adress, setAdress] = useState<string>('')
    const [payment, setPayment] = useState<string>('')

    const handleChangeDate = (event: React.FormEvent<HTMLInputElement>) => {
        setDate(event.currentTarget.value)
    }

    const handleChangeCost = (event: React.FormEvent<HTMLInputElement>) => {
        setCost(event.currentTarget.value)
    }

    const handleChangeOrigin = (event: any) => {
        setOrigin(event.value)
    }

    const handleChangeDescription = (event: React.FormEvent<HTMLInputElement>) => {
        setDescription(event.currentTarget.value)
    }

    const handleChangeAdress = (event: React.FormEvent<HTMLInputElement>) => {
        setAdress(event.currentTarget.value)
    }

    const handleChangePayment = (event: any) => {
        setPayment(event.value)
    }

    const originOptions = [
        { value: 'Nacional', label: 'Nacional' },
        { value: 'Internacional', label: 'Internacional' }
    ]

    const paymentOptions = [
        { value: 'Dinheiro', label: 'Dinheiro' },
        { value: 'Cartão de crédito', label: 'Cartão de crédito' },
        { value: 'Cartão de débito', label: 'Cartão de débito' },
        { value: 'PIX', label: 'PIX' },
        { value: 'Outro', label: 'Outro' }
    ]

    const selectStyles = {
        option: (provided: any, state: any) => ({
            ...provided,
            color: state.isSelected ? 'white' : 'rgba(255,255,255,0.5)',
            padding: 20,
            background: state.isSelected ? '#6D65D3' : '#1F212A',
            cursor: 'pointer',
        }),
        control: () => ({}),
        singleValue: (provided: any, state: any) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            const color = 'white';

            return { ...provided, opacity, transition, color };
        },
        indicatorsContainer: () => ({
            display: 'none'
        }),
        input: () => ({
            height: '0px',
            fontSize: '0px'
        }),
        valueContainer: () => ({
            background: '#1F212A',
            borderRadius: '10px',
            padding: '15px',
            cursor: 'pointer'
        }),
        menu: (provided: any) => ({
            ...provided,
            background: '#1F212A',
            borderRadius: '10px'
        }),
        menuList: (provided: any) => ({
            ...provided,
            background: '#1F212A',
            borderRadius: '10px'
        })
    }

    useEffect(() => {
        setDate(chosenUpdate.date ?? "")
        setCost(chosenUpdate.cost?.toString() ?? "0")
        setOrigin(chosenUpdate.origin  ?? "")
        setPayment(chosenUpdate.payment  ?? "")
        setDescription(chosenUpdate.description  ?? "")
        setAdress(chosenUpdate.adress ?? "")
    }, [])


    const convertNumber = (value: string) =>{
        if(value.includes(',') && value.includes('.')){
            return parseFloat(
                value
                    .replaceAll('.', '')
                    .replaceAll(',', '.')
                    .replace(/[^0-9.-]+/g, '')
                );
        }
        if(value.includes(',')){
            return parseFloat(
                value
                    .replaceAll(',', '.')
                    .replace(/[^0-9.-]+/g, '')
                );
        } else {
            return parseFloat(
                value
                    .replace(/[^0-9.-]+/g, '')
                );
        }
        

    }

    async function handleAlterTransaction() {
        // const fetchClass = new Fetch<IAlterTransaction>("Transaction/update.php");
        const body = {
            "id": chosenUpdate.id,
            "date": date,
            "cost": convertNumber(cost),
            "payment": payment,
            "origin": origin,
            "description": description,
            "adress": adress
        }

        let newArray = list.map(obj => {
            if (obj.id === chosenUpdate.id) {
              return body
            }
            return obj;
          });;
        console.log(newArray)
        localStorage.setItem('paymentsList', JSON.stringify(newArray))
        onClick()
    }

    async function handleDeleteTransaction() {
        let newArray = list.filter(obj => {
            return obj.id !== chosenUpdate.id
          });
        console.log(newArray)
        localStorage.setItem('paymentsList', JSON.stringify(newArray))
        onClick()
    }

    return (
        <Modal>
            <ModalShadow onClick={onClick} />
            <ModalContent>
                <ModalHeader>
                    <ModalRow>
                        <IconWallet />
                        <h1>Editar Transação</h1>
                    </ModalRow>
                    <IconClose onClick={onClick} />
                </ModalHeader>
                <ModalBody>
                    <Input value={date} onChange={handleChangeDate} type="date" placeholder="Data da transação" label="Data" />
                    <Input value={cost} onChange={handleChangeCost} type="text" placeholder="R$ 99,99" label="Valor" />
                    <GroupSelect>
                        <label>Origem</label>
                        <Select value={{ value: origin, label: origin }} placeholder="Selecione a origem..." styles={selectStyles} onChange={handleChangeOrigin} options={originOptions} />
                    </GroupSelect>
                    <Input value={description} onChange={handleChangeDescription} type="text" placeholder="Gasto com farmácia" label="Descrição" />
                    <Input onChange={handleChangeAdress} type="text" placeholder="Endereço" label="Endereço" />
                    <GroupSelect>
                        <label>Forma de pagamento</label>
                        <Select value={{ value: payment, label: payment }} placeholder="Selecione a forma de pagamento..." styles={selectStyles} onChange={handleChangePayment} options={paymentOptions} />
                    </GroupSelect>
                </ModalBody>
                <ModalFooter>
                    <GroupBtn>
                        <TButton text="Excluir" onClick={handleDeleteTransaction}><IconTrash /></TButton>
                        <TButton text="Cancelar" onClick={onClick}><IconCancel /></TButton>
                        <SButton text="Atualizar" onClick={handleAlterTransaction}><IconConfirm /></SButton>
                    </GroupBtn>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}