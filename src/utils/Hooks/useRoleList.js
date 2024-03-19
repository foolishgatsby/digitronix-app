import { useSelector } from "react-redux";

export function useRoleList() {
  const { roleList } = useSelector((state) => state.RoleReducer);
  return roleList;
}
