import React, { useState } from "react"
import { SButton, TButton } from "../../../Components/Button/button"
import { Input } from "../../../Components/Input/input"
import { GroupBtn, IconCancel, IconClose, IconConfirm, IconPay, IconReceive, IconTrash, IconWallet, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalRow } from "./style"

export const ModalNewPay: React.FC = () => {
    const [newPay, setNewPay] = useState<boolean>(true)
    const [newRec, setNewRec] = useState<boolean>(false)

    function handleNewPay() {
        setNewRec(false)
        setNewPay(true)
    }

    function handleNewRec() {
        setNewPay(false)
        setNewRec(true)
    }

    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <ModalRow>
                        <IconWallet />
                        <h1>Nova Transação</h1>
                    </ModalRow>
                    <ModalRow>
                        <GroupBtn>
                            {newPay ? <SButton text="Novo gasto" onClick={handleNewPay} active><IconPay /></SButton> : <SButton text="Novo gasto" onClick={handleNewPay}><IconPay /></SButton>}
                            {newRec ? <SButton text="Receber pagamento" onClick={handleNewRec} active><IconReceive /></SButton> : <SButton text="Receber pagamento" onClick={handleNewRec}><IconReceive /></SButton>}
                        </GroupBtn>
                    </ModalRow>
                    <IconClose />
                </ModalHeader>
                <ModalBody>
                    <Input type="date" placeholder="Data da transação" label="Data" />
                    <Input type="text" placeholder="R$ 99,99" label={newPay ? "Gasto" : "A receber"} />
                    <Input type="text" placeholder="Nacional / Internacional" label="Origem" />
                    <Input type="text" placeholder={newPay ? "Farmácia" : "Salário"} label="Tipo" />
                    <Input type="text" placeholder="Endereço" label="Endereço" />
                    <Input type="text" placeholder="Cartão de crédito" label="Forma de pagamento" />
                </ModalBody>
                <ModalFooter>
                    <GroupBtn>
                        <TButton text="Cancelar" onClick={() => { }}><IconCancel /></TButton>
                        <SButton text="Confirmar" onClick={() => { }}><IconConfirm /></SButton>
                    </GroupBtn>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export const ModalAlterPay: React.FC = () => {
    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <ModalRow>
                        <IconWallet />
                        <h1>Editar Transação</h1>
                    </ModalRow>
                    <IconClose />
                </ModalHeader>
                <ModalBody>
                    <Input type="date" placeholder="Data da transação" label="Data" />
                    <Input type="text" placeholder="R$ 99,99" label="Gasto" />
                    <Input type="text" placeholder="Nacional / Internacional" label="Origem" />
                    <Input type="text" placeholder="Gasto com farmácia" label="Tipo" />
                    <Input type="text" placeholder="Endereço" label="Endereço" />
                    <Input type="text" placeholder="Cartão de crédito" label="Forma de pagamento" />
                </ModalBody>
                <ModalFooter>
                    <GroupBtn>
                        <TButton text="Excluir" onClick={() => { }}><IconTrash /></TButton>
                        <TButton text="Cancelar" onClick={() => { }}><IconCancel /></TButton>
                        <SButton text="Atualizar" onClick={() => { }}><IconConfirm /></SButton>
                    </GroupBtn>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}