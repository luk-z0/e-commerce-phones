import { H3Event, EventHandlerRequest } from 'h3';
import * as service from '../services/phoneService';
import { Phone } from '../types/phone';

export const findAll = async (event: H3Event<EventHandlerRequest>): Promise<Phone[] | string> => {
    const phones = await service.findAll();
    if (!phones) {
        setResponseStatus(event, 404);
        return 'No phones found';
    }
    setResponseStatus(event, 200);
    return phones;
}

export const findById = async (event: H3Event<EventHandlerRequest>): Promise<Phone | string> => {
    const id = event.context.params?.id;
    if (!id) {
        setResponseStatus(event, 400);
        return 'ID is required';
    }
    const phone = await service.findById(Number(id));
    if (!phone) {
        setResponseStatus(event, 404);
        return 'Phone not found';
    }

    setResponseStatus(event, 200);
    return phone;
}

export const create = async (event: H3Event<EventHandlerRequest>): Promise<Phone | string> => {
    const body = await readBody<Phone>(event);
    if (!body) {
        setResponseStatus(event, 400);
        return 'Invalid phone data';
    }
    const newPhone = await service.create(body);
    if (!newPhone) {
        setResponseStatus(event, 500);
        return 'Failed to create phone';
    }
    setResponseStatus(event, 201);
    return newPhone;    
}

export const update = async (event: H3Event<EventHandlerRequest>): Promise<Phone | string> => {
    const id = event.context.params?.id;
    
    if (!id) {
        setResponseStatus(event, 400);
        return 'ID is required';
    }
    const body = await readBody<Phone>(event);
    if (!body) {
        setResponseStatus(event, 400);
        return 'Invalid phone data';
    }   
    body.id = Number(id);
    const updatedPhone = await service.update(body);
    if (!updatedPhone) {
        setResponseStatus(event, 500);
        return 'Failed to update phone';
    }
    setResponseStatus(event, 200);
    return updatedPhone;    
}

export const remove = async (event: H3Event<EventHandlerRequest>): Promise<Phone | string> => {
    const id = event.context.params?.id;
    if (!id) {
        setResponseStatus(event, 400);
        return 'ID is required';
    }
    const deletedPhone = await service.remove(Number(id));
    if (!deletedPhone) {
        setResponseStatus(event, 500);
        return 'Failed to delete phone';
    }   
    setResponseStatus(event, 200);
    return deletedPhone;
}

