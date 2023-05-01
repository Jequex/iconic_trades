import moment from 'moment';

export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD")
}

export const formatAmount = (amount) => { 
	let temp = Number(amount) ? Number(amount) : 0
	return temp.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}