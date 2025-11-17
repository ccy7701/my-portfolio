export function load({ route }) {
  return {
    hideFooter: route.id === '/'
  };
}
