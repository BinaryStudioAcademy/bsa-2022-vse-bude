import schedule from 'node-schedule';

export const clearAllJobs = () => {
  const jobsToDelete = Object.keys(schedule.scheduledJobs);
  for (const job of jobsToDelete) {
    schedule.cancelJob(job);
  }
};

export * from './auction';
