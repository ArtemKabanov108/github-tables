export type RequestStatusType = 'idle' | 'pending' | 'fulfilled' | 'rejected';

export const RequestStatus: Record<RequestStatusType, RequestStatusType> = {
  idle: 'idle',
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};
