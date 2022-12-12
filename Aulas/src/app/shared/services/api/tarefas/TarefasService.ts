import { api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface ITarefa {
    id: number,
    title: String;
    isCompleted: Boolean;
}


const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try{
        const { data } = await api().get("/tarefas");
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao buscar os registros.');
    }
};

const getById = async (id: number): Promise<ITarefa | ApiException> => {
    try{
        const { data } = await api().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar registro.');
    }
};

const create = async (dataToCreate: Omit<ITarefa, "id">): Promise<ITarefa | ApiException> => {
    try{
        const { data } = await api().post("/tarefas", dataToCreate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }
};

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
    try{
        const { data } = await api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar registro.');
    }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try{
        const { data } = await api().delete(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao apagar registro.');
    }
};


export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};