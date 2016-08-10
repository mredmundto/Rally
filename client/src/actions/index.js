export function selectProject(project) {
  return {
    type: 'PROJECT_SELECTED',
    payload: project
  }
}

export function createdSocket(socket) {
  return {
    type: 'SOCKET_CREATED',
    payload: socket
  }
}

// TODO: updateWorkers
export function updateWorkers(workersList){
	return {
		type: 'WORKERS_UPDATED',
		payload: workersList
	}
}
// TODO: newJob
export function newJob(job){
	return {
		type: 'NEW_JOB', 
		payload: job
	}
}

export function completeJob(job){
	return {
		type: 'COMPLETE_JOB', 
		payload: job
	}
}

export function sendCompleteJob(socket, job){
	return {
		type: 'SEND_COMPLETE_JOB', 
		payload: {socket, job}
	}
}

// TODO: updateResults

// TODO: finalResults

// TODO: allProjects