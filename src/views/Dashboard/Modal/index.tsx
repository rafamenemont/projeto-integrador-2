import React, { useState } from "react"
import { SButton, TButton } from "../../../components/Button/button"
import { Input } from "../../../Components/Input/input"
import { GroupBtn, IconCancel, IconClose, IconConfirm, IconPay, IconReceive, IconTrash, IconWallet, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalRow, ModalShadow } from "./style"

interface StyledModalProps {
    onClick: () => void;
}

export const ModalNewPay: React.FC<StyledModalProps> = ({ onClick }) => {
    const [newPay, setNewPay] = useState<boolean>(true)
    const [newRec, setNewRec] = useState<boolean>(false)

    function handleNewPay() {
        setNewRec(!newRec)
        setNewPay(!newPay)
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
                            {newPay ? <SButton text="Novo gasto" onClick={handleNewPay} active><IconPay /></SButton> : <SButton text="Receber pagamento" onClick={handleNewPay}><IconReceive /></SButton>}
                        </GroupBtn>
                    </ModalRow>
                    <IconClose onClick={onClick} />
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
                        <TButton text="Cancelar" onClick={onClick}><IconCancel /></TButton>
                        <SButton text="Confirmar" onClick={() => { }}><IconConfirm /></SButton>
                    </GroupBtn>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export const ModalAlterPay: React.FC<StyledModalProps> = ({ onClick }) => {
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
                        <TButton text="Cancelar" onClick={onClick}><IconCancel /></TButton>
                        <SButton text="Atualizar" onClick={() => { }}><IconConfirm /></SButton>
                    </GroupBtn>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}