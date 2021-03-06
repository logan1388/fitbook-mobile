// Copyright FitBook

import IDatabase from '../database/IDatabase';
import { CreateWorkoutModel, WorkoutHistoryModel, WorkoutSummaryModel, WorkoutModel } from '../models/WorkoutModel';
import ServiceResponse, { isServiceResponse } from '../models/ServiceResponse';

export default class WorkoutsService {
  private db: IDatabase;
  constructor(db: IDatabase) {
    this.db = db;
  }

  public async createWorkout(data: CreateWorkoutModel): Promise<WorkoutModel | ServiceResponse> {
    const r: WorkoutModel | ServiceResponse = await this.db.PostAsync(data);
    return r;
  }

  public async getWorkouts(id: string): Promise<WorkoutModel | ServiceResponse> {
    const r: WorkoutModel | ServiceResponse = await this.db.GetAsync(id);
    return r;
  }

  public async getWorkoutsHistoryByUserId(userId: string): Promise<WorkoutHistoryModel[] | ServiceResponse> {
    const r: WorkoutHistoryModel[] | ServiceResponse = await this.db.GetListByUserId(userId);
    return r;
  }

  public async getWorkoutsSummaryByUserId(userId: string): Promise<WorkoutSummaryModel[] | ServiceResponse> {
    const r: WorkoutSummaryModel[] | ServiceResponse = await this.db.GetListByUserId(userId);
    return r;
  }

  public async getWorkoutsListByUserId(
    type: string,
    subType: string,
    userId: string
  ): Promise<WorkoutModel[] | ServiceResponse> {
    const params = { type: type.toLocaleLowerCase(), subType: subType.toLocaleLowerCase() };
    const r: WorkoutModel[] | ServiceResponse = await this.db.GetListByUserId(userId, params);

    if (isServiceResponse(r)) {
      return r;
    }

    if (r.length < 1) {
      const serviceResponse = new ServiceResponse();
      serviceResponse.responseCode = 404;
      serviceResponse.responseMessage = 'Workouts data not found';
      return serviceResponse;
    }

    return r;
  }
}
