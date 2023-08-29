import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,

    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      queryClient.invalidateQueries({ active: true });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
