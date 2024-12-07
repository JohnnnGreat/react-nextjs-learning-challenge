type DynamicListProps = {
   list: any[];
   renderItem: (item: string[]) => JSX.Element;
};
const DynamicList = ({ list, renderItem }: DynamicListProps): JSX.Element => {
   return renderItem(list);
};

export default DynamicList;
